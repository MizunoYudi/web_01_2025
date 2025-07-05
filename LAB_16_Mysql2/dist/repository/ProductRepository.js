"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const mysql_1 = require("../database/mysql");
const Product_1 = require("../model/Product");
class ProductRepository {
    static instance;
    constructor() {
        this.createTable;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductRepository();
        }
        return this.instance;
    }
    async createTable() {
        const query = `
                        CREATE TABLE IF NOT EXISTS vendas.Product (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            price DECIMAL(10,2) NOT NULL
                        );
                      `;
        try {
            const resultado = await (0, mysql_1.executarComandoSQL)(query, []);
            console.log('Tabela Product criada com sucesso: ', resultado);
        }
        catch (err) {
            console.log('Erro ao criar a tabela Product: ', err);
        }
    }
    async insertProduct(name, price) {
        const query = `INSERT INTO vendas.Product (name, price) VALUES (?, ?)`;
        const resultado = await (0, mysql_1.executarComandoSQL)(query, [name, price]);
        console.log('Produto inserido com sucesso:', resultado);
        return new Product_1.Product(resultado.insertId, name, price);
    }
    async deleteProduct(id) {
        const query = `DELETE FROM vendas.Product WHERE id = ?`;
        const resultado = await (0, mysql_1.executarComandoSQL)(query, [id]);
        console.log('Produto removido:', resultado);
    }
    async updateProduct(id, name, price) {
        const query = `UPDATE vendas.Product set name = ?, price = ? WHERE id = ?`;
        const resultado = await (0, mysql_1.executarComandoSQL)(query, [name, price, id]);
        console.log('Produto atualizado com sucesso!:', resultado);
        return new Product_1.Product(id, name, price);
    }
    async searchProduct(id_product) {
        const query = `SELECT * FROM vendas.Product where id = ?`;
        const resultado = await (0, mysql_1.executarComandoSQL)(query, [id_product]);
        console.log('Produto encontrado:', resultado);
        const { id, name, price } = resultado[0];
        return new Product_1.Product(id, name, price);
    }
}
exports.ProductRepository = ProductRepository;
