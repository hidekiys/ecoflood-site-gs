const openMenu = document.getElementById("open-menu");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const btnVerMais = document.getElementById("btn-ver-mais");
const dropdown = document.getElementById("dropdown");
const closeDropDown = document.getElementById("close-dropdown");
const header = document.getElementById("main-header");
const scrollThreshold = 200;
const quizPergunta = document.getElementById("pergunta");
const labelA = document.getElementById("label-a");
const radioA = document.getElementById("resposta-a");
const labelB = document.getElementById("label-b");
const radioB = document.getElementById("resposta-b");
const labelC = document.getElementById("label-c");
const radioC = document.getElementById("resposta-c");
const labelD = document.getElementById("label-d");
const radioD = document.getElementById("resposta-d");
const quiz = document.getElementsByName("quiz");
const btnProximo = document.getElementById("quiz-proximo");
const btnVoltar = document.getElementById("quiz-anterior");
let quizEnchentes = [
	{
		id: 1,
		pergunta:
			"1. Qual o principal fator que agrava as enchentes em áreas urbanas?",
		respostas: {
			a: "Diminuição da temperatura",
			b: "Aumento da vegetação",
			c: "Descarte irregular de lixo",
			d: "Pouca urbanização",
		},
		respostaCorreta: "c",
		respostaSelecionada: "",
	},
	{
		id: 2,
		pergunta:
			"2. O que é 'monitoramento em tempo real' no contexto de enchentes?",
		respostas: {
			a: "Acompanhamento semanal dos níveis de rios",
			b: "Coleta de dados contínua e instantânea para alertas",
			c: "Inspeção visual de bueiros uma vez por mês",
			d: "Análise de dados climáticos passados",
		},
		respostaCorreta: "b",
		respostaSelecionada: "",
	},
	{
		id: 3,
		pergunta: "3. Qual o papel do lixo no processo de alagamento das cidades?",
		respostas: {
			a: "Diminui o fluxo da água nos rios",
			b: "Entope bueiros e sistemas de drenagem",
			c: "Não tem relação direta com alagamentos",
			d: "Aumenta a permeabilidade do solo",
		},
		respostaCorreta: "b",
		respostaSelecionada: "",
	},
	{
		id: 4,
		pergunta: "4. O que caracteriza uma 'área de risco' para enchentes?",
		respostas: {
			a: "Região com muitos parques e áreas verdes",
			b: "Localidades de alta altitude e baixa pluviosidade",
			c: "Áreas de várzea, margens de rios e encostas com drenagem deficiente",
			d: "Zonas comerciais com grande número de edifícios",
		},
		respostaCorreta: "c",
		respostaSelecionada: "",
	},
	{
		id: 5,
		pergunta:
			"5. Qual a consequência mais imediata de um alagamento em uma residência?",
		respostas: {
			a: "Melhoria na qualidade do ar",
			b: "Perda de bens materiais e móveis",
			c: "Aumento da valorização do imóvel",
			d: "Diminuição da umidade ambiente",
		},
		respostaCorreta: "b",
		respostaSelecionada: "",
	},
	{
		id: 6,
		pergunta:
			"6. Como a tecnologia IoT (Internet das Coisas) pode ajudar no monitoramento de enchentes?",
		respostas: {
			a: "Através da postagem de notícias em redes sociais",
			b: "Com sensores que medem níveis de água e fluxo em rios",
			c: "Pela otimização de rotas de transporte público",
			d: "Com o envio de mensagens de texto sem dados de localização",
		},
		respostaCorreta: "b",
		respostaSelecionada: "",
	},
	{
		id: 7,
		pergunta:
			"7. Além dos prejuízos materiais, qual outro impacto grave as enchentes podem causar?",
		respostas: {
			a: "Crescimento do turismo local",
			b: "Melhoria na infraestrutura de saneamento",
			c: "Impactos na saúde pública, como doenças e acidentes",
			d: "Aumento da biodiversidade local",
		},
		respostaCorreta: "c",
		respostaSelecionada: "",
	},
	{
		id: 8,
		pergunta:
			"8. O que significa 'economia circular' no contexto da gestão de resíduos?",
		respostas: {
			a: "Descartar todo o lixo em aterros sanitários",
			b: "Transformar resíduos em novos recursos e produtos",
			c: "Apenas reciclar papel e plástico",
			d: "Ignorar o problema do lixo",
		},
		respostaCorreta: "b",
		respostaSelecionada: "",
	},
	{
		id: 9,
		pergunta:
			"9. Por que o engajamento comunitário é importante na prevenção de enchentes?",
		respostas: {
			a: "Porque a população é responsável por toda a limpeza urbana",
			b: "Para criar canais de comunicação e colaboração na identificação de problemas",
			c: "Para distribuir tarefas de coleta de lixo entre os moradores",
			d: "Não é importante, apenas o poder público é responsável",
		},
		respostaCorreta: "b",
		respostaSelecionada: "",
	},
	{
		id: 10,
		pergunta:
			"10. Qual a importância de alertas de enchente em tempo real para a população?",
		respostas: {
			a: "Servem apenas para informar, sem impacto prático",
			b: "Permitem que as pessoas se preparem, busquem segurança e protejam seus bens",
			c: "Causam pânico desnecessário e não são eficazes",
			d: "São úteis apenas para equipes de resgate, não para moradores",
		},
		respostaCorreta: "b",
		respostaSelecionada: "",
	},
];
let perguntaAtual = 1;

openMenu.addEventListener("click", () => {
	menu.classList.add("active");
	openMenu.classList.add("fechado");
});

closeMenu.addEventListener("click", () => {
	menu.classList.remove("active");
	openMenu.classList.remove("fechado");
});

btnVerMais.addEventListener("click", () => {
	dropdown.classList.add("dropdown-active");
	carregarPergunta();
});
closeDropDown.addEventListener("click", () => {
	dropdown.classList.remove("dropdown-active");
});

window.addEventListener("scroll", () => {
	if (window.scrollY > scrollThreshold) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

btnProximo.addEventListener("click", (e) => {
	e.preventDefault();
	proximaPergunta();
});
btnVoltar.addEventListener("click", (e) => {
	e.preventDefault();
	voltarPergunta();
});
function voltarPergunta() {
	perguntaAtual--;
	carregarPergunta();
}

function proximaPergunta() {
	const isSelecionado = document.querySelector('input[name="quiz"]:checked');
	if (!isSelecionado) {
		window.alert("Selecione um resposta!");
		return;
	}
	if (perguntaAtual !== 10) {
		quizEnchentes = quizEnchentes.map((pergunta) => {
			if (pergunta.id === perguntaAtual) {
				return {
					...pergunta,
					respostaSelecionada: isSelecionado.value,
				};
			} else {
				return pergunta;
			}
		});
		perguntaAtual++;
		isSelecionado.checked = false;
		carregarPergunta();
	}
}

function carregarPergunta() {
	const pergunta = quizEnchentes.find(
		(pergunta) => pergunta.id === perguntaAtual
	);
	quizPergunta.innerHTML = pergunta.pergunta;
	labelA.innerHTML = "a. " + pergunta.respostas.a;
	labelB.innerHTML = "b. " + pergunta.respostas.b;
	labelC.innerHTML = "c. " + pergunta.respostas.c;
	labelD.innerHTML = "d. " + pergunta.respostas.d;

	switch (pergunta.respostaSelecionada) {
		case "a":
			radioA.checked = true;
			break;
		case "b":
			radioB.checked = true;
			break;
		case "c":
			radioC.checked = true;
			break;
		case "b":
			radioD.checked = true;
			break;
		default:
			break;
	}
}
