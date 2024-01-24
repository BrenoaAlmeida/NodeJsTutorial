const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json()) // MIDDLEWARE

const produtos = [];

app.get("/primeira-rota", (request, response) => {
    return response.json({
        message: "Minha primeira rota"
    });
});

/*
    EXISTEM 3 FORMAS DE PASSAR VALORES PARA A APLICAÇÃO VIA EXPRESS
    BODY => SEMPRE QUE EU QUISER ENVIAR DADOS PARA A APLICAÇÃO
    PARAMS(Parametros de rota obrigatorios) => /Product/123
    Query(Parametros de consulta opcionais) => /Product?id=123
*/

app.post("/produtos", (request, response) => {
    const { nome, preco } = request.body;
    const produto = ({
        id: randomUUID(),
        nome,
        preco,
    });

    produtos.push(produto);
    return response.json(produto);
})

app.get("/produtos", (request, response) => {
    return response.json(produtos);
})

app.get("/produtos/:id", (request, response) => {

    const { id } = request.params;
    const produto = produtos.find((produto) => produto.id === id);
    return response.json(produto);
})

app.put("/produtos/:id", (request, response) => {
    const { id } = request.params;
    const { nome, preco } = request.body;

    const produtoIndex =  produtos.findIndex((produto) => produto.id === id);

    produtos[produtoIndex] = {
        ...produtos[produtoIndex], //PEGA TODAS AS INFORMAÇÕES MENOS AS A BAIXO, SOBREESCREVENDO AS INFORMAÇÕES ABAIXO 
        nome,
        preco,
    }

    return response.json({messag: "Produto alterado com sucesso!"})
})

app.delete("/produtos/:id", (request, response) =>  {
    const { id } = request.params;
    console.log(id);
    
    const indexProdutos = produtos.findIndex((produto) => produto.id === id);        

    produtos.splice(indexProdutos, 1);

    return response.json({message: "Produto removido com sucesso!!"})
})


app.listen(4002, console.log("Servidor esta escutando na porta 4002"));