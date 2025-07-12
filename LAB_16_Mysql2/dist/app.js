"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./controller/ProductController");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000; // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express_1.default.json()); // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml
const productController = new ProductController_1.ProductController();
app.post('/teste/produto', productController.cadastrarProduto.bind(productController));
app.get('/teste/produto/:id', productController.procurarProduto.bind(productController));
app.delete('/teste/produto/:id', productController.removerProduto.bind(productController));
app.put('/teste/produto/:id', productController.atualizarProduto.bind(productController));
app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));
