// Tipagem no Typescrip

// Tipagem implícita
let username = 'shaolin_matador_de_porco'
username = 'flavioDoPneu'

// Tipagem  explícita
let pi: number = 3.1415
let logado: boolean = true

//union types (guardar varios tipos de variáveis number, string...)
let rg: number | string = 127662311
rg = '12234345'

let generico: any = []
generico = {
    a: '',
    b: 8,
    c: true
}
generico = 'Eu sou genérico'
generico = 6.89

const listaDeNomes: string[] = ['João Pedro', 'César', 'vitória', 'Larissa']
listaDeNomes.push('Roberta')

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//notas.push('jjj')

const valores: Array<string | number> = ['joão', 12345, 'aberto', 6789]
const arr: Array<boolean> = [true, false, true, false]
const lista: Array<any> = [1, 'fdsdfs', true, {}, []]
const lista2 = [1, 'fdsdfs', true, {}, []]



