function maiuscula(frase:string):string{
    return frase.toUpperCase();
}

const maiusculaLb = (frase:string) => frase.toUpperCase();

console.log(maiuscula("Teste1"), maiusculaLb("Teste pra ver se funciona"));