import { resourceLimits } from "worker_threads";
import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository {
    private static instance: ProductRepository;

    private constructor() {
        this.createTable;
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = new ProductRepository();
        }
        return this.instance;
    }

    private async createTable(){
        const query = `
                        CREATE TABLE IF NOT EXISTS vendas.Product (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            price DECIMAL(10,2) NOT NULL
                        );
                      `
        try{
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela Product criada com sucesso: ', resultado);
        } catch (err) {
            console.log('Erro ao criar a tabela Product: ', err);
        }
    }

    async insertProduct(name: string, price: number): Promise<Product>{
        const query = `INSERT INTO vendas.Product (name, price) VALUES (?, ?)`;
        const resultado = await executarComandoSQL(query, [name, price]);
        console.log('Produto inserido com sucesso:', resultado);
        return new Product(resultado.insertId, name, price);
    }

    async deleteProduct(id: number): Promise<any>{
        const query = `DELETE FROM vendas.Product WHERE id = ?`;
        const resultado = await executarComandoSQL(query, [id]);
        console.log('Produto removido:', resultado);
    }

    async updateProduct(id: number, name: string, price: number): Promise<Product>{
        const query = `UPDATE vendas.Product set name = ?, price = ? WHERE id = ?`
        const resultado = await executarComandoSQL(query, [name, price , id]);
        console.log('Produto atualizado com sucesso!:', resultado);
        return new Product(id, name, price);
    }

    async searchProduct(id_product: number): Promise<Product>{
        const query = `SELECT * FROM vendas.Product where id = ?`;
        const resultado = await executarComandoSQL(query, [id_product]);
        console.log('Produto encontrado:', resultado);
        const {id, name, price} = resultado[0];
        return new Product(id, name, price);
    }
}