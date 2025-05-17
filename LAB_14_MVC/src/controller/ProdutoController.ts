import { Request, Response } from "express"
import { ProdutoService } from "../service/ProdutoService"

const productService = new ProdutoService()

export function cadastrarProduto(req: Request, res: Response){
    try{
        const novoProduto = productService.cadastrarProduto(req.body)
        res.status(201).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                produto: novoProduto
            }
        )
    } catch (error: any) {
        res.status(400).json({status: "error", Message: error.message})
    }
}

export function filtrarProdutoPorID(req: Request, res: Response){
    try{
        const produto = productService.filtraID(req.body.id)
        if(produto != null){
            res.status(200).json(
                {
                    mensagem: "Produto encontrado",
                    produto: produto
                }
            )
        } else {
            res.status(404).json({status: "error", Message: "Produto não encontrado"})
        } 
    } catch (error: any) {
        res.status(400).json({status: "error", Message: error.message})
    }
}

export function filtrarProdutoPorNome(req: Request, res: Response){
    try{
        const produto = productService.filtraNome(req.body)
        if(produto != null){
            res.status(200).json(
                {
                    mensagem: "Produto encontrado",
                    produto: produto
                }
            )
        } else {
            res.status(404).json({status: "error", Message: "Produto não encontrado"})
        }
       
    } catch (error: any) {
        res.status(400).json({status: "error", Message: error.message})
    }
}