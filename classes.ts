class Cachorro {
    // nome: string 
    // raca:  string 
    // cor: string 
    // idade: number
    // peso: number
    // altura: number
    // morde: boolean
    // vacinado: boolean
    // pedigree: boolean

    /**
     * metodo costrutor 
     * serve para ao criar um novo objeto da classe, possamos receber valores
     * para que a plasse utilize-os
     * 
     * Se o programador não criar o método construtor, a própria linguagem irá
     * gerar um metodo construtor padrão.
     * no Javascript/ Typescript, se pode ter apenas um único método construtor
     */

    constructor(
        public nome: string,
        public raca: string,
        public cor: string,
        public idade: number,
        public peso: number,
        public altura: number,
        public morde: boolean,
        public vacinado: boolean,
        public pedigree: boolean) {

        // this.nome = nome
        // this.raca = raca
        // this.cor = cor
        // this.idade = idade
        // this.peso = peso
        // this.altura = altura
        // this.morde = morde
        // this.vacinado = vacinado 
        // this.pedigree = pedigree
    }
    somar(a: number, b: number): number {
        return a + b
    }
}


/**
 * Objeto é uma instância de uma classe
 */

let c = new Cachorro('Kid', 'Pitbull', 'Branco', 3, 50, 0.7, true, true, true)
console.log(c);
