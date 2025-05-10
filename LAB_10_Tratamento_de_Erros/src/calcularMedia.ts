function calcularMedia(notas: number[]): number {
    try {
        let soma = 0;
        for(let i = 0; i < notas.length; i++){
            soma += notas[i];
        }
        return soma / notas.length;
    } catch (erro) {
        console.log("Erro encontrado: ", (erro as Error).message);
        return 0;
    }
}

const avc: number[] = [3,5,3,8,4];
console.log(calcularMedia(avc));