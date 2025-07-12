"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarProduto = cadastrarProduto;
exports.filtrarProdutoPorID = filtrarProdutoPorID;
exports.filtrarProdutoPorNome = filtrarProdutoPorNome;
const ProdutoService_1 = require("../service/ProdutoService");
const productService = new ProdutoService_1.ProdutoService();
function cadastrarProduto(req, res) {
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            produto: novoProduto
        });
    }
    catch (error) {
        res.status(400).json({ status: "error", Message: error.message });
    }
}
function filtrarProdutoPorID(req, res) {
    try {
        const produto = productService.filtraID(req.body.id);
        if (produto != null) {
            res.status(200).json({
                mensagem: "Produto encontrado",
                produto: produto
            });
        }
        else {
            res.status(404).json({ status: "error", Message: "Produto não encontrado" });
        }
    }
    catch (error) {
        res.status(400).json({ status: "error", Message: error.message });
    }
}
function filtrarProdutoPorNome(req, res) {
    try {
        const produto = productService.filtraNome(req.body);
        if (produto != null) {
            res.status(200).json({
                mensagem: "Produto encontrado",
                produto: produto
            });
        }
        else {
            res.status(404).json({ status: "error", Message: "Produto não encontrado" });
        }
    }
    catch (error) {
        res.status(400).json({ status: "error", Message: error.message });
    }
}
