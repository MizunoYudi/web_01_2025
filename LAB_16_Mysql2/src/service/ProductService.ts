import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
    private productRepository = ProductRepository.getInstance();

    createProduct(data: any): Promise<Product>{
        if(!data.name || !data.price){
            throw new Error('Favor informar os campos obrigatórios');
        }
        return this.productRepository.insertProduct(data.name, data.price)
    }

    searchProduct(id: number): Promise<Product>{
        if(!id){
            throw new Error('Informe o id para buscar o produto');
        }
        return this.productRepository.searchProduct(id);
    }

    updateProduct(id: number, data: any): Promise<Product>{
        if(!id){
            throw new Error('Informe o id para atualizar o produto');
        }
        return this.productRepository.updateProduct(id, data.name, data.price)
    }

    removeProduct(id: number){
        if(!id){
            throw new Error('Informe o id para remover o produto')
        }
        this.productRepository.deleteProduct(id);
    }
}