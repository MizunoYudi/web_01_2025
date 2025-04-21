// Criar uma classe Numeros e utilizar os seus metodos na seguinte ordem
/*
 * Criar o objeto
 * Adicionar alguns numeros
 * Remover 1
 * Exibir a media dos valores no console 
*/

class Numeros {
    valores: number[];

    constructor(valores: number[]){
        this.valores = valores;
    }

    adicionar(n: number){
        this.valores.push(n);
    }

    removerUltimo(){
        this.valores.pop();
    }

    media(){
        let media = 0;
        for(let i = 0; i < this.valores.length; i ++){
            media += this.valores[i];
        }
        return media/this.valores.length;
    }
}

const vet: number[] = [1, 2, 3, 4, 5, 6, 7];
const aux = new Numeros(vet);
aux.adicionar(8);
aux.adicionar(9);
aux.removerUltimo();
console.log(aux.media());


