import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Um gatinho branco e fofo tomando leite",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gatinho curioso explorando uma caixa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gatinho ronronando no colo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gatinho brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gatinho preto olhando para a câmera",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id:6,
        descricao: "Gatinho fazendo pose fofa",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();

app.use(express.json());

// app é o servidor, 3000 é uma porta
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// req = requisição e res = resposta
app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas a imersão!");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) =>{
        return post.id === Number(id)
    })
}
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

app.get("/livro", (req, res) => {
    const livro = {
        "Título do livro": "O Senhor dos Anéis",
        "Autor do livro": "J.R.R. Tolkien",
        "Ano de publicação": 1954,
        "Gênero": "Fantasia"
    };
    res.status(200).json(livro);
});
