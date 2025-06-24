import { useEffect, useState } from 'react';
import './Pagina.css';


interface ProdutosState {
        id: number,
        nome: string,
        preco: number,
        categoria: string
    }
function Pagina() {
   
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [categoria, setCategoria] = useState("")
    const [id, setId] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [produtos, setProdutos] = useState<ProdutosState[]>([
        {id: 1, 
        nome: "Base da boca rosa", 
        preco: 90.0, 
        categoria: "maquiagem e beleza"
    }
    ])
     useEffect(() => {
        const buscaDados = async()=> {
            try {
            const resultado = await fetch("https://localhost:8000/produtos") //devolve a rota 
            if (resultado.status === 200) {
               const dados = await resultado.json(); //converte o resultado em json
               setProdutos(dados); //atualiza o estado com os dados recebidos
            }
             if (resultado.status === 400) {
                const erro = await resultado.json()
                setMensagem(erro.mensagem);
                //console.log(erro.mensagegm);
               
            }
        }
        catch (error) {
          
            setMensagem("Fetch falhou, verifique a API");
          }
        }
        buscaDados()

    },[]) 

    //[] Significa as dependências do useEffect, nesse caso não tem dependências, 
    // então ele só executa uma vez quando o componente é montado. 
    // Sempre que a dependendência mudar, o useEffect será executado novamente.

    function TrataCadasatro(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const novoProduto: ProdutosState = { 
            id: parseInt(id), 
            nome: nome, 
            preco: parseFloat(preco), 
            categoria: categoria
        };


       setProdutos([...produtos, novoProduto]) 
        
        
        
    }
    function trataId(event: React.ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
    }
    function trataNome(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function trataPreco(event: React.ChangeEvent<HTMLInputElement>) {
           setPreco(event.target.value); 
    }
    function trataCategoria(event: React.ChangeEvent<HTMLInputElement>) {
        setCategoria(event.target.value);
    }
  return (
    <>
      <header>
        <div>Logo</div>
        <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Lojas</a>
                </li>
                <li>
                    <a href="">Carinho</a>
            </li>
         </ul>
        </nav>
     </header>
        <main>
        <div className="mensagem">
            <p>Erro ao executar fetch</p>
        </div>
          <div className="conteiner-listagem">
            {produtos.map(produto => {
                return (
                    <div className="produto-conteiner">
                        <div className="produto-nome">
                            {produto.nome}
                        </div>
                        <div className="produto-preco">
                            {produto.preco}
                            </div>
                        <div className="produto-categoria">
                            {produto.categoria} 
                            </div>
                    </div>
                )
            })}

          </div>
            <div className="conteiner-cadastro">
                <form onSubmit={TrataCadasatro}>
                <input type="number" name = "id"  id = "id" placeholder="Digite o id" onChange={trataId} />
                 <input type="text" name = "nome"  id = "nome" placeholder="Digite o nome" onChange={trataNome} />
                  <input type="number" name = "preco"  id = "preco" placeholder="Digite o preço" onChange={trataPreco} />
                   <input type="text" name = "categoria"  id = "categoria" placeholder="Digite a categoria" onChange={trataCategoria} />
                    <input type="submit" value = "Cadastrar" />
                    </form>
            </div>
        </main>
        <footer></footer>

    </>
  )
}
export default Pagina;