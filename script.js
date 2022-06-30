// ---- 01 ----- //

let pessoa = {
    nome: 'Anderson',
    idade: 27,
    profissao: "Programador"
};

// ------ 02 --- //

pessoa.origem = 'Brasileiro';

// ---- 03 ---- //

delete pessoa.origem;

// ---- 04 ---//

console.log(pessoa);

// ---- 05 ----//

let cadastro = [
    {
        nome: 'Allan',
        idade: 15,
        telefone: '4002-8922',
        amigos: ['Ellen', 'Lais', 'Anderson', 'Jonas']
    },
    {
        nome: 'Ellen',
        idade: 21,
        telefone: '4002-8922',
        amigos: ['Lais', 'Allan', 'Lucas', 'Anderson']
    },
    {
        nome: 'Lais',
        idade: 25,
        telefone: '4002-8922',
        amigos: ['Allan', 'Ellen', 'Anderson', 'Jonas']
    },
    {
        nome: 'Jonas',
        idade: 29,
        telefone: '4002-8922',
        amigos: ['Thiago', 'Anderson', 'Allan', 'Ellen']
    },
    {
        nome: 'Thiago',
        idade: 29,
        telefone: '4002-8922',
        amigos: ['Jonas', 'Anderson', 'Allan', 'Lais']
    }
]

console.log(cadastro[0].amigos[3]);
console.log(cadastro[1].amigos[2]);
console.log(cadastro[2].amigos[1]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[0]);

