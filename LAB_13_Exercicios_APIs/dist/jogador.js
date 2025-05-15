"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
class Jogador {
    id;
    nome;
    cpf;
    email;
    telefone;
    posicao;
    constructor(id, nome, cpf, email, telefone, posicao) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.posicao = posicao;
    }
}
exports.Jogador = Jogador;
