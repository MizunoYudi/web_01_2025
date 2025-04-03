type Aluno = {
    nome: string,
    nota: number;
}

const alunos: Aluno[] = [
    {nome: "Alice", nota: 8},
    {nome: "Bruno", nota: 5},
    {nome: "Carla", nota: 6},
    {nome: "Daniel", nota: 7}
];

// Implementar funcao que apresenta alunos com nota maior que 7

const aprovados = (aluno: Aluno[]) => aluno.filter(aluno => aluno.nota >= 7);

console.log(aprovados(alunos));