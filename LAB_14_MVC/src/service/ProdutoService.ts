import { Produto } from "../model/Produto"
import { ProdutoRepository } from "../repository/ProdutoRepository"

export class ProdutoService {
    produtoRepository = ProdutoRepository.getInstance()

    cadastrarProduto(produtoData: any): Produto {
        const { id, nome, preco, fabricante } = produtoData
        if(!id || !nome || !preco || !fabricante || !fabricante.nome || !fabricante.endereco || !fabricante.endereco.cidade || !fabricante.endereco.pais){
            throw new Error("Informações incompletas");
        }

        const novoProduto = new Produto(id, nome, preco, fabricante)
        this.produtoRepository.inserirProduto(novoProduto)
        return novoProduto;
    }

    filtraID(produtoData: any): Produto | null {
        const id = produtoData.id
        if(!id){
            throw new Error("Id não informado")
        }
        
        const produto = this.produtoRepository.buscarProdutoPorID(parseInt(id))
        return produto
    }

    filtraNome(produtoData: any): Produto | null {
        const nome = produtoData.nome
        if(!nome){
            throw new Error("Id não informado")
        }
        
        const produto = this.produtoRepository.buscarProdutoPorNome(nome)
        return produto
    }
}