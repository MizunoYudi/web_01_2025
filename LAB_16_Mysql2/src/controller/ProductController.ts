import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";

const productService = new ProductService();

export class ProductController {

    async cadastrarProduto(req: Request, res: Response){
        try{
            const product = await productService.createProduct(req.body);
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
            productService.removeProduct(parseInt(req.params.id));
            res.status(200).json({
                message: 'Produto Removido'
            });
        } catch (err: any) {
            res.status(400).json({ message: err.message});
        }
    }

    async atualizarProduto(req: Request, res: Response){
        try{
            const product = await productService.updateProduct(req.body);
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
            const product = await productService.searchProduct(parseInt(req.params.id));
            res.status(201).json({
                message: 'Produto encontrado!',
                produto: product
            })
        } catch (err: any) {
            res.status(400).json({ message: err.message});
        }
    }
}