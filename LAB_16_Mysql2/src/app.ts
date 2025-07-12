import express from "express"
import { ProductController } from "./controller/ProductController"

const app = express()
const PORT = process.env.PORT ?? 3000 // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express.json()) // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml

const productController = new ProductController();

app.post('/teste/produto', productController.cadastrarProduto.bind(productController));
app.get('/teste/produto/:id', productController.procurarProduto.bind(productController));
app.delete('/teste/produto/:id', productController.removerProduto.bind(productController));
app.put('/teste/produto/:id', productController.atualizarProduto.bind(productController));

app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));

