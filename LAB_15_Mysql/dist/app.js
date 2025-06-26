"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductRepository_1 = require("./repository/ProductRepository");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000; // Verifica se ja existe alguma porta já definida no env (enviroment), se n tiver, define 3000 como padrão
app.use(express_1.default.json()); // Escolhe o tipo de arquivo pelo qual será feita a comunicação json ou xml
const repository = new ProductRepository_1.ProductRepository();
repository.createTable();
//repository.insertProduct("camiseta", 20.99);
//repository.deleteProduct(1);
//repository.updateProduct(2, "arroz", 13.50);
repository.searchProduct(2);
app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));
