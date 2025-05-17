import { Produto } from "../model/Produto"

export class ProdutoRepository {
    private static instance: ProdutoRepository // Cria uma instancia "Fixa" para salvar os dados
    private produtoList: Produto[] = []

    private constructor() {}

    public static getInstance(): ProdutoRepository { // Cria a instancia se nao foi criada ainda
        if(!this.instance){
            this.instance = new ProdutoRepository()
        }
        return this.instance
    }

    inserirProduto(produto: Produto){
        this.produtoList.push(produto)
    }

    buscarProdutoPorID(ID: number){
        for(let i = 0; i < this.produtoList.length; i++){
            if(this.produtoList[i].id == ID){
                return this.produtoList[i]
            }
        }
        return null
    }

    buscarProdutoPorNome(Nome: string){
        for(let i = 0; i < this.produtoList.length; i++){
            if(this.produtoList[i].nome == Nome){
                return this.produtoList[i]
            }
        }
        return null
    }
}