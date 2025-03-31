// Exercício 1 - Classificacao de idades

let idades: number[] = [10, 15, 20, 8, 17, 25];

for(let i = 0; i < idades.length; i++){
    let frase = `${i} - ${idades[i]} `;
    if(idades[i] < 12){
        frase += "Criança";
    } else if(idades[i] >= 12 && idades[i] < 18){
        frase += "Adolescente";
    } else {
        frase += "Adulto";
    }

    console.log(frase);
}

// Exercício 2: Manipulação de Lista de Nomes

let nomes: string[] = ["Carlos", "Ana", "Pedro", "Mariana"];
nomes.splice(nomes.indexOf("Pedro"));
nomes.push("João");
nomes.unshift("Beatriz");
console.log(nomes + `, total de nomes ${nomes.length}`);

// Exercício 3: Lista Mista com Filtragem

let listaMista: (number | string)[] = [1, "Maça", 2, "Banana",  3, "Laranja"];
let numeros: number[] = [];
let frutas: string[] = [];

/* Primeira solução que pensei
for(let i = 0; i < listaMista.length; i++){
    if(typeof listaMista[i] == "number")
        numeros.push(listaMista.shift());
    else
        frutas.push(listaMista.shift());
}
*/

// O ideal
for(const i of listaMista){
    if(typeof i === "number")
        numeros.push(i);
    else
        frutas.push(i);
}

console.log(`Números: ${numeros}\nFrutas: ${frutas}`);