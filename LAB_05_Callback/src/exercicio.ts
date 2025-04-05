type Tarefa = {
    descricao: string,
    prioridade: number,
    concluida: boolean;
};

let tarefa: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false } ,
    { descricao: "Enviar e-mail", prioridade: 3 , concluida: false } ,
    { descricao: "Reunião com equipe", prioridade: 1 , concluida: false }
];

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number) : void {
    console.log(`Tarefa concluida: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
}

function executarTarefas(tarefa: Tarefa[], callback: (descricao: string, prioridade: number, totalTarefas: number) => void, intervalo: number = 1000): void{
    tarefa.sort((a: Tarefa, b: Tarefa) => a.prioridade - b.prioridade);

    let contador = 0;
    let interval = setInterval(() => {
        if(contador == tarefa.length - 1)
            clearInterval(interval);

        let item = tarefa[contador];

        if(item.descricao == "Cancelar"){
            clearInterval(interval);
        }     

        callback(item.descricao, contador++, tarefa.length);
        item.concluida = true;
    },  intervalo)

}

executarTarefas(tarefa, imprimirTarefa, 1500);