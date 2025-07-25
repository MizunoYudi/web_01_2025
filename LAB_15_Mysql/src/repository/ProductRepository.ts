import { executarComandoSQL } from "../database/mysql";

export class ProductRepository {
    imprimeResult(err: any, result: any){
        if(result != undefined){
            console.log("Dentro callback", result);
        }
    }

    createTable(){
        try{
            const resultado = executarComandoSQL("CREATE TABLE IF NOT EXISTS vendas.Product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL)", [], this.imprimeResult);
            console.log('Query executada com sucesso: ', resultado);
        } catch (err) {
            console.log('Erro ao executar a query:', err);
        }
    }

    insertProduct(name: string, price: number){
        try {
            const resultado = executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
                [name, price], this.imprimeResult
            );
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
        }
    }

    deleteProduct(id: number){
        try {
            const resultado = executarComandoSQL(
                "DELETE FROM vendas.Product WHERE id = ?",
                [id], this.imprimeResult
            );
            console.log('Produto removido:', resultado);
        } catch (err) {
            console.error('Erro remover o produto:', err);
        }
    }

    updateProduct(id: number, name: string, price: number){
        try {
            const resultado = executarComandoSQL(
                "UPDATE vendas.Product set name = ?, price = ? WHERE id = ?",
                [name, price , id], this.imprimeResult
            );
            console.log('Produto atualizado com sucesso!:', resultado);
        } catch (err) {
            console.error('Erro ao atualizar o produto:', err);
        }
    }

    searchProduct(id: number){
        try {
            const resultado = executarComandoSQL(
                "SELECT * FROM vendas.Product where id = ?",
                [id], this.imprimeResult
            );
            console.log('Produto encontrado:', resultado);
        } catch (err) {
            console.error('Erro ao atualizar o produto:', err);
        }
    }
}