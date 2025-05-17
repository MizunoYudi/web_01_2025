import express, { Request, Response } from "express"
import { Produto }  from "./produto"

const app = express()
const PORT = process.env.PORT ?? 3000 // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express.json()) // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml

function filtrarProdutoPorID(req: Request, res: Response) {
    try {
        let ID = req.params.id
        res.status(200).json({status: "sucess", data: {id: ID}})
    } catch (e:unknown) {
        res.status(400).json({status: "error", Message: "Necessário informar o ID "})
    }
}

function filtrarProdutoPorNome(req: Request, res: Response):void {
    try {
        let name = req.query.name

        if(!name){
            throw new Error("Informe o nome");
        }
        
        res.status(200).json({ Name: name })
    } catch (e:unknown) {
        res.status(400).json({status: "error", Message: (e as Error).message})
    }
}

function novoProduto(req: Request, res: Response) {
    try{
        let data: any = req.body

        if(!data.nome || !data.preco || !data.fabricante){
            throw new Error("Produto requer, nome, preço e fabricante")
        } else if(!data.fabricante.nome || !data.fabricante.endereco || !data.fabricante.endereco.cidade || !data.fabricante.endereco.pais){
            throw new Error("Falta informacoes do fabricante")
        }

        const produto = new Produto(data.id, data.nome, data.preco, data.fabricante)
        res.status(201).json(produto)
    } catch (e:unknown) {
        res.status(400).json({status: "error", Message: (e as Error).message})
    }
}

app.get('/api/produto/:id', filtrarProdutoPorID)
app.get('/api/produto', filtrarProdutoPorNome)
app.post('/api/produto', novoProduto)
app.listen(PORT, () => console.log(`API em execução no URL: https://localhost:${PORT}`));

