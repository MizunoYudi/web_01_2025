// Criar a interface Endereco, criar a classe cliente, e criar um objeto da classe cliente

interface Endereco {
    rua: string;
    numero: string;
    cidade: string;
}

class Cliente {
    nome: string;
    cpf: string;
    endereco: Endereco;

    constructor(nome: string, cpf: string, endereco: Endereco){
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
    }
}

const e1: Endereco = {
    rua: "Palmeiras de Miranda",
    numero: "344",
    cidade: "Salto"
}

const Gabriel = new Cliente("Gabriel Miranda", "123.456.789-0", e1);

