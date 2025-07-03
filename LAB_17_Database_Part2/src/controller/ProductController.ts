import { Body, Post, Route, Tags, Res, TsoaResponse } from "tsoa"
import { ProductDto } from "../model/ProductDto"
import { BasicResponseDto } from "../model/BasicResponseDto"
import { ProductService } from "../service/ProductService"

@Route("product")
@Tags("Product")


export class ProductController{
    private productService = new ProductService();

    @Post()
    async cadastrarProduto(
        @Body() dto:ProductDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise< | void>{
        try{
            const product = await this.productService.createProduct(dto)
            return sucess(201, new BasicResponseDto("Produto criado com sucesso!", product));
        }catch(err: any){
            return fail(400, new BasicResponseDto( err.message, undefined));
        }
    }
}