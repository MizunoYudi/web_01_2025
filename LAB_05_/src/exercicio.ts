type Tarefa = {
    descricao: string,
    prioridade: number,
    concluida: boolean;
};

let tarefa: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false } ,
    { descricao: "Enviar e-mail", prioridade: 3 , concluida: false } ,
    { descricao: "Reunião com equipe", prioridade: 1 , concluida: false }
]

function executarTarefas(tarefa: Tarefa[], callback: (desc: string, pri: number, conc: boolean) => void): void{
    
}