"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = void 0;
class ProductDto {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id || 0;
        this.name = name || '';
        this.price = price || 0;
    }
}
exports.ProductDto = ProductDto;
