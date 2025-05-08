class Categoria {
    id: number;
    nome: string;

    constructor(id: number, nome:string){
        this.id = id;
        this.nome = nome;
    }
}

class Endereco {
    cidade: string;
    pais: string;

    constructor(cidade: string, pais: string){
        this.cidade = cidade;
        this.pais = pais;
    }
}

class Fabricante {
    nome: string;
    endereco: Endereco;

    constructor(nome: string, endereco: Endereco){
        this.nome = nome;
        this.endereco = endereco;
    }
}

class Itens {
    nome: string;
    quantidade: number;

    constructor(nome: string, quantidade: number){
        this.nome = nome;
        this.quantidade = quantidade;
    }
}

class Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: Categoria;
    fabricante: Fabricante;
    itens: Itens[];

    constructor(id: number, nome: string, preco: number, categoria: Categoria, fabricante: Fabricante, itens: Itens[]){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.fabricante = fabricante;
        this.itens = itens;
    }
}