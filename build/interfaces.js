"use strict";
/*let pessoa = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf:'000.000.000.00',
    solteiro: false,
    habilidade: ['java',  'Angulas', ' Typescript', ' Javascript', 'Node.js', 'Spring boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '12300-000',
    }
}

let pessoa2 = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf:'000.000.000.00',
    solteiro: false,
    habilidade: ['java', 'Angulas', ' Typescript', ' Javascript', 'Node.js', 'Spring boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '12300-000',
    },
    rg: '127663210',
}
*/
const p = {
    altura: 1.9,
    nome: 'Faustão',
    idade: 12,
    cpf: '000.000.000.00',
    solteiro: true,
    habilidades: ['HTML'],
    endereco: {
        rua: 'Rua Bacana',
        cep: '12300-000',
        complemento: 'Apartamento',
        estado: 'PE',
        numero: 789
    },
    rg: '127663210',
    cumprimentar() {
        console.log('Saudações, meu nome é:' + this.nome);
    }
};
const p2 = {
    altura: 1.9,
    nome: 'Paula',
    idade: 14,
    cpf: '222.000.000.00',
    solteiro: true,
    habilidades: ['HTML'],
    endereco: {
        rua: 'Rua legal',
        cep: '12400-000',
        complemento: 'casa',
        estado: 'RJ',
        numero: 755
    },
    rg: '127663210',
    cumprimentar() {
        console.log('Olá para todos, prazer em conhecer!');
    }
};
