import { useState } from 'react';
interface ProdutosState {
        id: number,
        nome: string,
        preco: number,
        categoria: string
    }
function Pagina() {
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [id, setId] = useState("")
    const [produtos, setProdutos] = useState<ProdutosState[]>([
        {id: 1, 
        nome: "Base da boca rosa", 
        preco: 90.0, 
        categoria: "maquiagem e beleza"
    }
    ])
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
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Home</a>
            </li>
         </ul>
        </nav>
     </header>
        <main>
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
                <input type="text" name = "id"  id = "id" placeholder="Digite o id" onChange={trataId} />
                 <input type="text" name = "nome"  id = "nome" placeholder="Digite o nome" onChange={trataNome} />
                  <input type="text" name = "preco"  id = "preco" placeholder="Digite o preço" onChange={trataPreco} />
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