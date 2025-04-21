// Completar a funcao criarAnimal

interface Animal{
    nome: string;
    tipo: string;
}

function criarAnimal(a: Animal): string {
    return `O animal ${a.nome} é do tipo ${a.tipo}`;
}

const cabixo: Animal = {
    nome: "cabixo",
    tipo: "anfibio"
}

console.log(criarAnimal(cabixo));