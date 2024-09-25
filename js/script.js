// INICIALIZANDO UM ARRAY
const carros = ['Renegade', 'Toro', 'Tracker']; // Cria um array com nomes de carros

const carrosClassicos = [
    'Fusca',
    'Corcel',
    'Chevette' // Cria um array com nomes de carros clássicos
];

const carrosEsportivos = []; // Inicializa um array vazio para carros esportivos
carrosEsportivos[0] = 'Ferrari'; // Adiciona Ferrari na primeira posição
carrosEsportivos[1] = 'McLaren'; // Adiciona McLaren na segunda posição
carrosEsportivos[2] = 'Porsche'; // Adiciona Porsche na terceira posição

const carrosUtilitarios = new Array('Montanda', 'Toro', 'S10'); // Cria um array usando o construtor Array

const notas = [8.5, 7.7, 10]; // Cria um array com notas

// LENDO UM VALOR DE UM ARRAY
alert(carrosEsportivos[1]); // Exibe um alerta com o segundo carro esportivo (McLaren)

// ARRAY COMO OBJETO
const aluno = { // Cria um objeto 'aluno' com propriedades
    nome: 'Raphael',
    telefone: '1234-5678',
    notaFinal: 10
};
alert(aluno.nome); // Exibe o nome do aluno
alert(aluno.telefone); // Exibe o telefone do aluno
alert(aluno.notaFinal); // Exibe a nota final do aluno

// PROPRIEDADES E MÉTODOS DO ARRAY
// 1 - DIMENSÃO DO ARRAY
alert(`metodo length: ${carros.length}`); // .length exibe o número de elementos dentro do array 'carros'

// 2 - Inserindo novos elementos no array
carros.push('Gol')
alert(`metodo push (inserir novos elementos): ${carros}`);

// 3 - Remover o ultimo elemento
carros.pop();
alert(`metodo pop (removendo ultimo elemento): ${carros}`)

// 4 - Remover o primeiro elemento subindo os demais
carros.shift();
alert(`metodo shift (removendo o primeiro elemento): ${carros}`);

// 5 - Adicionar novo elemento no topo da lista
carros.unshift('Gol')
alert(`metodo unshift (adicionando um elemento no topo da lista): ${carros}`)

// 6 - Une todos os elementos do array em uma string
alert(`metodo join (une os elementos do array em uma strig e muda a saida dos mesmos): ${carros}`.join(" - ")); // retorno item1 - item2 - item3