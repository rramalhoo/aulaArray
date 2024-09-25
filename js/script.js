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

const carrosUtilitarios = new Array('Montana', 'Toro', 'S10'); // Cria um array usando o construtor Array

const notas = [8.5, 7.7, 10]; // Cria um array com notas

// Função para exibir o segundo carro esportivo
function exibirCarroEsportivo() {
    alert(carrosEsportivos[0]); // Exibe um alerta com o segundo carro esportivo (McLaren)
}

// Função para exibir as propriedades do objeto 'aluno'
function exibirDadosAluno() {
    const aluno = { // Cria um objeto 'aluno' com propriedades
        nome: 'Raphael',
        telefone: '1234-5678',
        notaFinal: 10
    };
    alert(`Nome: ${aluno.nome}`);
    alert(`Telefone: ${aluno.telefone}`);
    alert(`Nota Final: ${aluno.notaFinal}`);
}

// Função para testar os métodos do array
function testarArray() {
    alert(`Método length: ${carros.length}`); // .length exibe o número de elementos dentro do array 'carros'

    // 2 - Inserindo novos elementos no array
    carros.push('Gol');
    alert(`Método push (inserir novo elemento): ${carros}`);

    // 3 - Remover o último elemento
    carros.pop();
    alert(`Método pop (remover último elemento): ${carros}`);

    // 4 - Remover o primeiro elemento subindo os demais
    carros.shift();
    alert(`Método shift (remover primeiro elemento): ${carros}`);

    // 5 - Adicionar novo elemento no topo da lista
    carros.unshift('Gol');
    alert(`Método unshift (adicionar novo elemento no topo): ${carros}`);

    // 6 - Une todos os elementos do array em uma string
    alert(`Método join (une elementos em string): ${carros.join(" - ")}`);
}