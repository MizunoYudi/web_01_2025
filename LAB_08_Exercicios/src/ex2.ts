// Criar uma classe Livro e umna funcao que imprima seus atributos

class Livro {
    titulo: string;
    autor: string;
    ano: number;

    constructor(titulo: string, autor:string, ano:number){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    imprimirDados(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.ano}`);
    }
}

const l1 = new Livro("Obras de Adamantina", "Carla Maria", 2005);
l1.imprimirDados();