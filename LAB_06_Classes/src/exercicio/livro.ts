class Livro {
    titulo: string;
    autor: string;
    anoPublicado: number;
    editora: string;

    constructor(titulo: string, autor: string, anoPublicado: number, editora: string){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
        this.editora = editora;
    }

    exibirDados(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nAno Publidado: ${this.anoPublicado}\nEditora: ${this.editora}`);
    }
}

const livinho = new Livro("Livrinho", "Livinho", 2019, "Kondzila");
const adedonhas = new Livro("Adedonhas", "Amaral", 2017, "Brasil Escola");

livinho.exibirDados();
adedonhas.exibirDados();