"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../service/ProductService");
const productService = new ProductService_1.ProductService();
class ProductController {
    async cadastrarProduto(req, res) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json({
                message: 'Produto cadastrado com sucesso!',
                produto: product
            });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    async removerProduto(req, res) {
        try {
            productService.removeProduct(parseInt(req.params.id));
            res.status(200).json({
                message: 'Produto Removido'
            });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    async atualizarProduto(req, res) {
        try {
            const product = await productService.updateProduct(req.body);
            res.status(201).json({
                message: 'Produto atualizado com sucesso!',
                produto: product
            });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
    async procurarProduto(req, res) {
        try {
            const product = await productService.searchProduct(parseInt(req.params.id));
            res.status(201).json({
                message: 'Produto encontrado!',
                produto: product
            });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}
exports.ProductController = ProductController;
