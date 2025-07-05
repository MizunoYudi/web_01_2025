"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
class ProdutoRepository {
    static instance; // Cria uma instancia "Fixa" para salvar os dados
    produtoList = [];
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProdutoRepository();
        }
        return this.instance;
    }
    inserirProduto(produto) {
        this.produtoList.push(produto);
    }
    buscarProdutoPorID(ID) {
        for (let i = 0; i < this.produtoList.length; i++) {
            if (this.produtoList[i].id == ID) {
                return this.produtoList[i];
            }
        }
        return null;
    }
    buscarProdutoPorNome(Nome) {
        for (let i = 0; i < this.produtoList.length; i++) {
            if (this.produtoList[i].nome == Nome) {
                return this.produtoList[i];
            }
        }
        return null;
    }
}
exports.ProdutoRepository = ProdutoRepository;
