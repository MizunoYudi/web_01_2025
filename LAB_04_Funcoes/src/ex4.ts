type Funcionario = {
    nome: string;
    cargo: string;
}

const funcionarios: Funcionario[] = [
    {nome: "Marcos", cargo: "Desenvolvedor"},
    {nome: "Fernanda", cargo: "Gerente"},
    {nome: "Carlos", cargo: "Desenvolvedor"},
    {nome: "Joana", cargo: "Analista"}
];

const cargoDesejado: string = "Desenvolvedor";

// Implementar função retornando funcionários do cargo especificado

const procurarFuncionario = (func:Funcionario[], cargo: string) => func.filter(func => func.cargo == cargo);

console.log(procurarFuncionario(funcionarios, cargoDesejado));