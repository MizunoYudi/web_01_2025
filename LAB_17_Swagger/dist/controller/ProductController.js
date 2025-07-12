"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tsoa_1 = require("tsoa");
const ProductService_1 = require("../service/ProductService");
const ProductDto_1 = require("../model/dto/ProductDto");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
let ProductController = class ProductController {
    productService = new ProductService_1.ProductService();
    async cadastrarProduto(dto, fail, sucess) {
        try {
            const product = await this.productService.createProduct(dto);
            return sucess(201, new BasicResponseDto_1.BasicResponseDto("Produto criado", product));
        }
        catch (err) {
            return fail(400, new BasicResponseDto_1.BasicResponseDto(err.message, undefined));
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductDto_1.ProductDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "cadastrarProduto", null);
exports.ProductController = ProductController = __decorate([
    (0, tsoa_1.Route)("product"),
    (0, tsoa_1.Tags)("Product")
], ProductController);
