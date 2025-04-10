class Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

    boasVindas(){
        console.log(`Bem-vindo(a), ${this.nome}! Seu e-mail é ${this.email}`);
    }
}

const pablo = new Usuario("Pablo", "pablo@gmail.com");
pablo.boasVindas();