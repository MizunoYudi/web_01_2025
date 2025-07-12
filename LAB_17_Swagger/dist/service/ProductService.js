"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    productRepository = ProductRepository_1.ProductRepository.getInstance();
    createProduct(data) {
        if (!data.name || !data.price) {
            throw new Error('Favor informar os campos obrigatórios');
        }
        return this.productRepository.insertProduct(data.name, data.price);
    }
    searchProduct(id) {
        if (!id) {
            throw new Error('Informe o id para buscar o produto');
        }
        return this.productRepository.searchProduct(id);
    }
    updateProduct(data) {
        if (!data.id) {
            throw new Error('Informe o id para atualizar o produto');
        }
        return this.productRepository.updateProduct(data.id, data.name, data.price);
    }
    removeProduct(id) {
        if (!id) {
            throw new Error('Informe o id para remover o produto');
        }
        this.productRepository.deleteProduct(id);
    }
}
exports.ProductService = ProductService;
