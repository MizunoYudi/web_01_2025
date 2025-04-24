class utilidades {
    static compararStrings(a: string, b: string): boolean {
        if(a.trim().toLowerCase() ===  b.trim().toLowerCase()){
            return true;
        }
        return false;
    }

    formatar(dado: number): string;
    formatar(dado: Date): string;
    formatar(dado: boolean): string;
    formatar(dado: any): any{
        if(typeof dado === 'number'){
            return dado.toFixed(2).toString();
        } else if(typeof dado === 'object' && dado instanceof Date ){
            return dado.toLocaleDateString();
        } else {
            if(dado){
                return 'Sim';
            }
            return 'Não';
        }
    }

    static ocorrenciasSubstring(texto: string, substring: string): number{
        let ocorrencias = 0;
        let indice = 0;
        while(texto.indexOf(substring, indice) != -1){
            indice = texto.indexOf(substring, indice) + 1;
            ocorrencias++;
        }
        return ocorrencias;
    }
}

const comparar1: string = 'Frase igual';
const comparar2: string = 'Frase ingual';
const dado1: number = 2.654;
const dado2: Date = new Date();
const dado3: boolean = false;
const texto: string = "Abobrinha, a palavra Abobrinha aparece Abobrinha 4 vezes Abobrinha";
const obj = new utilidades();

console.log(utilidades.compararStrings(comparar1, comparar2));
console.log(obj.formatar(dado1));
console.log(obj.formatar(dado2));
console.log(obj.formatar(dado3));
console.log(utilidades.ocorrenciasSubstring(texto, '4'));