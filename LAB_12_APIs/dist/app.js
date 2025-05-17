"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produto_1 = require("./produto");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000; // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express_1.default.json()); // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml
function filtrarProdutoPorID(req, res) {
    try {
        let ID = req.params.id;
        res.status(200).json({ status: "sucess", data: { id: ID } });
    }
    catch (e) {
        res.status(400).json({ status: "error", Message: "Necessário informar o ID " });
    }
}
function filtrarProdutoPorNome(req, res) {
    try {
        let name = req.query.name;
        if (!name) {
            throw new Error("Informe o nome");
        }
        res.status(200).json({ Name: name });
    }
    catch (e) {
        res.status(400).json({ status: "error", Message: e.message });
    }
}
function novoProduto(req, res) {
    try {
        let data = req.body;
        if (!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer, nome, preço e fabricante");
        }
        else if (!data.fabricante.nome || !data.fabricante.endereco || !data.fabricante.endereco.cidade || !data.fabricante.endereco.pais) {
            throw new Error("Falta informacoes do fabricante");
        }
        const produto = new produto_1.Produto(data.id, data.nome, data.preco, data.fabricante);
        res.status(201).json(produto);
    }
    catch (e) {
        res.status(400).json({ status: "error", Message: e.message });
    }
}
app.get('/api/produto/:id', filtrarProdutoPorID);
app.get('/api/produto', filtrarProdutoPorNome);
app.post('/api/produto', novoProduto);
app.listen(PORT, () => console.log(`API em execução no URL: https://localhost:${PORT}`));
