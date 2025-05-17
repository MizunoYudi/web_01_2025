import express, { Request, Response } from "express"
import { cadastrarProduto, filtrarProdutoPorID, filtrarProdutoPorNome } from "./controller/ProdutoController"

const app = express()
const PORT = process.env.PORT ?? 3000 // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express.json()) // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml

app.get('/api/produto/:id', filtrarProdutoPorID)
app.get('/api/produto', filtrarProdutoPorNome)
app.post('/api/produto', cadastrarProduto)
app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));

