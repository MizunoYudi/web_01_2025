let dados: (number | string)[] = [10, "Azul", 25, "Vermelho", 30, "Verde"];
let valoresNumericos: number[] = [];
let valoresTextuais: string[] = [];

for(const item of dados){
    if(typeof item == "number")
        valoresNumericos.push(item);
    else
        valoresTextuais.push(item);
}
console.log(valoresNumericos, valoresTextuais);