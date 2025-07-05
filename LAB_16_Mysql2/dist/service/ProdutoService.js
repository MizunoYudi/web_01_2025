"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const Produto_1 = require("../model/Produto");
const ProdutoRepository_1 = require("../repository/ProdutoRepository");
class ProdutoService {
    produtoRepository = ProdutoRepository_1.ProdutoRepository.getInstance();
    cadastrarProduto(produtoData) {
        const { id, nome, preco, fabricante } = produtoData;
        if (!id || !nome || !preco || !fabricante || !fabricante.nome || !fabricante.endereco || !fabricante.endereco.cidade || !fabricante.endereco.pais) {
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Produto_1.Produto(id, nome, preco, fabricante);
        this.produtoRepository.inserirProduto(novoProduto);
        return novoProduto;
    }
    filtraID(produtoData) {
        const id = produtoData.id;
        if (!id) {
            throw new Error("Id não informado");
        }
        const produto = this.produtoRepository.buscarProdutoPorID(parseInt(id));
        return produto;
    }
    filtraNome(produtoData) {
        const nome = produtoData.nome;
        if (!nome) {
            throw new Error("Id não informado");
        }
        const produto = this.produtoRepository.buscarProdutoPorNome(nome);
        return produto;
    }
}
exports.ProdutoService = ProdutoService;
