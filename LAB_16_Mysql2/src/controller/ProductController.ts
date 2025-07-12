import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";


export class ProductController {
    private productService = new ProductService();

    async cadastrarProduto(req: Request, res: Response){
        try{
            const product = await this.productService.createProduct(req.body);
            res.status(201).json({
                message: 'Produto cadastrado com sucesso!',
                produto: product
            })
        } catch (err: any) {
            res.status(400).json({ message: err.message});
        }
    }

    async removerProduto(req: Request, res: Response){
        try{
            this.productService.removeProduct(parseInt(req.params.id));
            res.status(200).json({
                message: 'Produto Removido'
            });
        } catch (err: any) {
            res.status(400).json({ message: err.message});
        }
    }

    async atualizarProduto(req: Request, res: Response){
        try{
            const product = await this.productService.updateProduct(parseInt(req.params.id), req.body);
            res.status(201).json({
                message: 'Produto atualizado com sucesso!',
                produto: product
            })
        } catch (err: any) {
            res.status(400).json({ message: err.message});
        }
    }

    async procurarProduto(req: Request, res: Response){
        try{
            const product = await this.productService.searchProduct(parseInt(req.params.id));
            res.status(201).json({
                message: 'Produto encontrado!',
                produto: product
            })
        } catch (err: any) {
            res.status(400).json({ message: err.message});
        }
    }
}