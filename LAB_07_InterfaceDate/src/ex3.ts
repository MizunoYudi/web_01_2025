interface Veiculo{
    marca: string,
    modelo: string

    ligar(): void;
}

class Carro {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    };

    ligar(): void{
        console.log(`Carro Ligado!`);
    };
}