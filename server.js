const http = require("http"); // erro acontecendo devido ao arquivo no formato errado de TypeScript(TS) ao invés de JavaScript(JS)

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json"}); //Porque eu preciso desta  linha para fazer a aplicação funcionar de forma continua??

/*

Explicação de um forum do porque estava dando erro de "ERR_STREAM_WRITE_AFTER_END write after end"

Codigo do forum

// server.js
const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Index page.")
    }
    else if (req.url === "/about") {
        res.end("About page.")
    } else {
        res.end("Ooops. Page not found.")
    }

})
server.listen(8080, "localhost", () => console.log("Server is listening..."));




Yes it should work,
because if we do no put the oops content in an else block it will still run even after the code has executed the above if blocks.
This will lead to node executing an “end” code for the response even after the response has ended for it in one of the above blocks,
 which eventually leads to the error.
 Hope this explaination helps anyone who gets stuck in the future .
*/

if(request.url === "/")
{
    response.end(
        JSON.stringify({
                message: "Rota Inicial", //Porque eu preciso colocar uma virgula no final da declaração da propriedade??
            })
        );
}

else if(request.url === "/produto")
{
    response.end(
        JSON.stringify({
                message: "Rota do Produto", //Porque eu preciso colocar uma virgula no final da declaração da propriedade??
            })
        );
}
else if(request.url === "/usuario")
{
    response.end(
        JSON.stringify({
                message: "Rota do Usuario",
            })
        );
}

else
{
response.end(
    JSON.stringify({
            message:"Qualquer outra rota",
        })
    );
}
}).listen(4001, () => console.log("Servidor esta rodando na porta  4001"));