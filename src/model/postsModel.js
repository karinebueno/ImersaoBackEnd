import conectarAoBanco from "../config/dbConfig.js";

// Esta linha conecta o nosso servidor Node.js ao banco de dados MongoDB.
// A string de conexão é obtida da variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados.
export default async function getTodosPosts() {
    // Seleciona o banco de dados "Imersao-instabytes".
    const db = conexao.db("Imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna um array com os resultados.
    return colecao.find().toArray();
}