import { join } from "path"

// Lista de números
let nomes: string[] = ["Ana", "João", "Maria"];
let posJoao: number = nomes.indexOf("João");
console.log(posJoao);
nomes.splice(posJoao, posJoao);

console.log(nomes);

// Lista genérica (usando Array<tipo>)
let idades: Array<number> = [20, 30, 40];

// Lista com tipos mistos (Union type)
let misto: (number | string)[] = [1, "dois", 3, "quatro"];

let fruits: string[] = ["Maçã", "Banana"];
fruits.push("Laranja"); // Adiciona no final
fruits.unshift("Uva"); // Adiciona no início

fruits.pop() // Remove o último elemento ("Laranja")
fruits.shift() // Remove o primeiro elemento ("Uva");

console.log(fruits[0]); //Maça
console.log(fruits.length);

