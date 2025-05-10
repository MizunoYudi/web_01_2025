import express, { Request, Response } from "express"
import { Produto }  from "./produto"

const app = express()
const PORT = process.env.PORT ?? 3000 // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express.json()) // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml

function helloWorld(req: Request, res:Response): void {
    res.status(200).send('Hello World!!!');
}

function filtrarProdutoPorID(req: Request, res: Response) {
    try {
        let id = req.params.id
        res.status(200).json({ ID: id})
    } catch (e:unknown) {
        res.status(400).json({ Message: "Necessário informar o ID "})
    }
}

function filtrarProdutoPorNome(req: Request, res: Response):void {
    try {
        let name = req.query.name
        res.status(200).json({ Name: name})
    } catch (e:unknown) {
        res.status(400).json({ Message: "Necessário informar o nome"})
    }
}

function novoProduto(req: Request, res: Response) {
    try{
        let data: any = req.body

        if(!data.nome || data.preco || data.fabricante){
            throw new Error("Produto requer, nome, preço e fabricante")
        }

        const produto = new Produto(data.id, data.nome, data.preco, data.fabricante)
        res.status(200).json(produto)
    } catch (e:unknown) {
        res.status(400).json({ Message: (e as Error).message})
    }
}

app.get('/api/hello', helloWorld)
app.get('/api/product', filtrarProdutoPorNome)
app.get('/api/product', novoProduto)
app.listen(PORT, () => console.log(`API em execução no URL: https://localhost:${PORT}`));

