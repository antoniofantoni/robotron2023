// const robotron = document.querySelector("#robotron");
// // function dizOi() {
// //   alert("oie");
// // }
// // // robotron.addEventListener("click", dizOi);

// robotron.onclick = function () {
//   alert("oieeee");
// };

/*
nesse último, não precisaria criar a função dizOi(), pois no método onclick ele receberia a função, nem tão pouco o evento addEventListener
*/


const controle =document.querySelectorAll('[data-controle]')//todos os elementos com data-attributes = data-controle, ou seja, - e +, foram selecionados, para selecionar um data attributes preciso usar []. foi usado um data-attibute ao invés de classes que manipula elementos do html, assim o javascript fica independente do html.

const estatistica =document.querySelectorAll('[data-estatistica]')
console.log(estatistica)
console.log('Abaixo: Pegou todos os controle')
console.log(controle) // retornará 10 data-controles, ou seja, todos os sinais de - e +
/* A função abaixo

Essa função adiciona um "event listener" (ou "ouvinte de eventos") ao elemento especificado, que é acionado quando o usuário clica no elemento.

Quando o evento "click" é acionado, a função de callback é executada, que nesse caso é uma função anônima que recebe um parâmetro chamado "evento". Dentro dessa função de callback, é chamada outra função chamada "manipulaDados", passando dois argumentos:

"evento.target.dataset.controle": esse argumento é uma propriedade personalizada ("data-controle") do elemento que acionou o evento de clique, acessada através do objeto "dataset" do elemento. O valor dessa propriedade é passado como o primeiro argumento para a função "manipulaDados".
"evento.target.parentNode": esse argumento é o elemento pai (ou "parent node") do elemento que acionou o evento de clique, que é passado como o segundo argumento para a função "manipulaDados".
Em resumo, a função "addEventListener" adiciona um "ouvinte de eventos" ao elemento especificado, que quando acionado, chama a função "manipulaDados" passando dois argumentos: uma propriedade personalizada do elemento que acionou o evento e o elemento pai desse mesmo elemento.

*/
const pecas = {
	"bracos": {
			"forca": 29,
			"poder": 35,
			"energia": -21,
			"velocidade": -5
	},

	"blindagem": {
			"forca": 41,
			"poder": 20,
			"energia": 0,
			"velocidade": -20
	},
	"nucleos":{
			"forca": 0,
			"poder": 7,
			"energia": 48,
			"velocidade": -24
	},
	"pernas":{
			"forca": 27,
			"poder": 21,
			"energia": -32,
			"velocidade": 42
	},
	"foguetes":{
			"forca": 0,
			"poder": 28,
			"energia": 0,
			"velocidade": -2
	}
}

controle.forEach(elemento => {
	elemento.addEventListener("click",(evento)=> {
	manipulaDados(evento.target.dataset.controle,evento.target.parentNode)
	
	atualizaEstatisticas(evento.target.dataset.peca)	



	// console.log(evento.target)
	// console.log(evento.target.dataset.controle)
	// console.log(evento.target.parentNode)

	//evento.target.dataset.controle estou pegando o valor do controle data-controle="-" ou data-controle="+"  e passando como argumento para a função manipulaDados, recebida pelo parâmetro operação
	
	//evento.target.parentNode é o pai do elemento clicado

	})
});

function manipulaDados(operacao,controle) { //operacao recebe - ou + na chamada manipulaDados da função ao clicar, 

	const peca = controle.querySelector("[data-contador]");//o input onde o número aparece foi selecionado
  if (operacao === "-") {
		peca.value = parseInt(peca.value) - 1;
  } else {
		peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
	console.log("peças abaixo ao clicar em algum + ou -")
	console.log(pecas[peca])


estatistica.forEach( (element) => {
	console.log(element.dataset.estatistica)
	console.log(element.textContent)
	element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
}

)}