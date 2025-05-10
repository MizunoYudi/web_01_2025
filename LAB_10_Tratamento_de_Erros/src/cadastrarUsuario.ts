function cadastrarUsuario(nome: string, idade: number) {
    if(nome.length === 0 || idade < 0){
        throw new Error("Dados Invalidos");
    }
    console.log("Usuário cadastrado!");
}

const nome: string = ``;
const idade: number = 15;

cadastrarUsuario(nome, idade);