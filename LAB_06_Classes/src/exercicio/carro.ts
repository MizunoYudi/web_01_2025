class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarCarro(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.marca}`);
    }
}

const fiorino = new Carro("Fiat", "2015", 2015);
fiorino.mostrarCarro();