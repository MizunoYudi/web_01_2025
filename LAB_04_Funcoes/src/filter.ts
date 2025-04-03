const frase: string = "Trabalhando com filter";

let palavras: string[] = frase.split(" "); // Toda vez que tiver um espaço na string, separará em elementos do vetor da string

console.log(palavras);

const resultado = palavras.filter(item => item.length > 5) // Essa função funciona buscando o elemento a ser filtrado, ou seja, quando houver uma palavra com mais de 5 letras, ele colocará no array. Esse metodo sempre exige uma função para sua execução
console.log(resultado);