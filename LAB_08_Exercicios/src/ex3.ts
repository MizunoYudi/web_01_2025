// Converter a interface em uma classe com os mesmos campos

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class Enlatados implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}