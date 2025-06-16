import { useState } from 'react';
interface ProdutosState {
        id: number,
        nome: string,
        preco: number,
        categoria: string
    }
function Pagina() {
   
    const [produtos, setProdutos] = useState<ProdutosState[]>([
        {id: 1, 
        nome: "Base da boca rosa", 
        preco: 90.0, 
        categoria: "maquiagem e beleza"
    }
    ])
    function TrataCadasatro() {
        
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
                <input type="text" name = "id"  id = "id" placeholder="Digite o id" />
                 <input type="text" name = "nome"  id = "nome" placeholder="Digite o nome" />
                  <input type="text" name = "preco"  id = "preco" placeholder="Digite o preço" />
                   <input type="text" name = "categoria"  id = "categoria" placeholder="Digite a categoria" />
                    <input type="submit" value = "Cadastrar" onClick={TrataCadasatro} />
            </div>
        </main>
        <footer></footer>

    </>
  )
}
export default Pagina;