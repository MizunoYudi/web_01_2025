import { ProductDto } from "../model/ProductDto";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{
    private productRepository = ProductRepository.getInstance()

    async createProduct(data : any):Promise<ProductDto>{
        if(!data.name || !data.price){
            throw new Error('Favor informar os campos obrigatórios')
        }
        return this.productRepository.insertProduct(data.name, data.price)
    }

}