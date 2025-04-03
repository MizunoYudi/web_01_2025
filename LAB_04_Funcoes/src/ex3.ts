function dobrarNumeros(num:number[]):number[]{
    let dobro: number[] = [];
    for(const n of num)
        dobro.push(n * 2);
    return dobro;
}

let numeros: number[] = [2, 4, 12, 24, 32];
console.log(numeros, dobrarNumeros(numeros));