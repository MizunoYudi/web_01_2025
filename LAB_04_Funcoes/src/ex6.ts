type Evento = {
    nome: string;
    mes: string;
};

const eventos: Evento[] = [
    {nome: "Workshop TypeScript", mes: "Janeiro"},
    {nome: "Hackthon", mes: "Março"},
    {nome: "Conferência de IA", mes: "Janeiro"}
];

const mesDesejado: string = "Janeiro";

const eventosDoMes = (evento: Evento[], mes: string) => evento.filter(evento => evento.mes == mes);

console.log(eventosDoMes(eventos, mesDesejado));