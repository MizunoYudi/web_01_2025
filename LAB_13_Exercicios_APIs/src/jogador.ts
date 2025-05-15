export class Jogador {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: number;
    posicao: string;

    constructor(id: number, nome: string, cpf: string, email: string, telefone: number, posicao: string){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.posicao = posicao;
    }

}