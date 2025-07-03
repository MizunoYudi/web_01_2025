import express from "express"
import { RegisterRoutes } from './route/routes';
import { ProductController } from "./controller/ProductController"
import { setupSwagger } from './config/swagger';


const productController = new ProductController()

const app = express()
const PORT = 3040;
app.use(express.json())

const apiRouter = express.Router();
RegisterRoutes(apiRouter);

app.use('/api', apiRouter);

RegisterRoutes(app);

setupSwagger(app);

app.listen(PORT, () => console.log("Servidor rodando em http://localhost:3000"))
