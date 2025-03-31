let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;

let dado: any = 10;
let vazio: null = null; // Pode parecer redundante, mas existe uma configuração chamada [strict], que impede a utilização de nulos
let indefinido: undefined = undefined // Uma variável que não teve seu tipo definido ainda, pode ser alterado, acho

// Tipos literais (valores específicos)
let situacao1: "ativo" | "inativo" = "inativo"; // Só aceita esses dois valores
    // Entretanto, não se limita a apenas duas opções, ou à um só tipo:
    let situacao2: "Liga" | "Desliga" | 84 = "Desliga";

// União de tipos (Union Type)
let idadeOuNulo: number | null = null;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
// Para Executar: npx ts-node variaveis.ts