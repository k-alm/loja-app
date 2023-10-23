export default async function ProdutoID({params}) {

    const response = await fetch("http://localhost:3000/dados/produto-api");
    const produtos = await response.json();
  
    const produto = produtos.find(produto => produto.id == params.id);

    return (
      <div>
          <h1>Identificação das FRUTAS</h1>
          <p>Esta página é um exemplo de como receber os parâmetros da API e apresentar um produto selecionado dela:</p>
          <p>Valor do ID: {params.id}</p>
          <p>Nome do produto: {params.nome}</p>
          <p>Tipo do produto: {params.tipo}</p>
          <p>Descrição do produto: {params.desc}</p>
      </div>
    )
  }