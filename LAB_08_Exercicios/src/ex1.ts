// Criar umna interface funcionario e delcarar uma variável do próprio tipo, atribuindo valores a ela

interface funcionario{
    nome: string,
    idade: string,
    registro: number,
    salario: number,
    dataNascimento: Date,
    ativo: boolean;
};

let carla: funcionario = {
    nome: "Carla",
    idade: "27",
    registro: 1,
    salario: 1600,
    dataNascimento: new Date("1997-12-01"),
    ativo: true
};