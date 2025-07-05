import express, { Request, Response } from "express"
import { ProductRepository } from "./repository/ProductRepository"
import { ProductController } from "./controller/ProductController"

const app = express()
const PORT = process.env.PORT ?? 3000 // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express.json()) // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml

const productController = new ProductController();

app.post('/teste/produto', productController.cadastrarProduto);
app.get('/teste/produto/:id', productController.procurarProduto);
app.delete('/teste/produto/:id', productController.removerProduto);
app.put('/teste/produto/:id', productController.atualizarProduto);

app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));

