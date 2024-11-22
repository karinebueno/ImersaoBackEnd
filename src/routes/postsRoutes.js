import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

// Configura o armazenamento de arquivos utilizando o multer.
// O multer é uma biblioteca que auxilia no upload de arquivos para o servidor.
const storage = multer.diskStorage({
  // Define o diretório de destino para os arquivos.
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // Define o nome do arquivo no destino.
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Cria uma instância do multer com a configuração de armazenamento.
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  // Permite que o servidor interprete requisições com corpo no formato JSON.
  app.use(express.json());
  app.use(cors(corsOptions));

  // Rota para buscar todos os posts.
  app.get("/posts", listarPosts);

  // Rota para criar um novo post.
  app.post("/posts", postarNovoPost);

  // Rota para fazer upload de uma imagem.
  // O parâmetro 'upload.single("imagem")' indica que estamos esperando um único arquivo
  // com o nome "imagem" no corpo da requisição.
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost)
};

export default routes;