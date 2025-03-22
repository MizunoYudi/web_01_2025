mensagem = 'Essa mensagem eh um teste';


for(let i = 0; i < mensagem.lenght; i++){
    if(mensagem.charAt(i)){
        mensagem.replace(mensagem.charAt(i), '@');
        break;
    }
}

console.log(mensagem);