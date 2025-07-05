import express, { Request, Response } from "express"
import { ProductRepository } from "./repository/ProductRepository"

const app = express()
const PORT = process.env.PORT ?? 3000 // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express.json()) // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml

const repository: ProductRepository = new ProductRepository();

repository.createTable();
repository.insertProduct("camiseta", 20.99);
repository.deleteProduct(1);
repository.insertProduct("camiseta", 20.99);
repository.updateProduct(2, "arroz", 13.50);
repository.searchProduct(2);

app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));

