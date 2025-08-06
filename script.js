const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após uma competição, você se depara com um novo suplemento que promete resultados impressionantes. Qual é o seu primeiro pensamento?",
        alternativas: [
            "Isso é incrível!",
            "Isso é duvidoso!"
        ]
    },
    {
        enunciado: "Seu treinador realiza uma série de aulas sobre nutrição e suplementação. No final de uma aula, ele pede que você escreva um artigo sobre suplementos. O que você faz?",
        alternativas: [
            "Pesquiso em fontes confiáveis sobre o impacto dos suplementos.",
            "Escrevo o artigo baseado em experiências pessoais."
        ]
    },
    {
        enunciado: "Seu treinador promove uma discussão sobre os benefícios e malefícios dos suplementos. Como você se posiciona?",
        alternativas: [
            "Acredito que os suplementos podem ajudar a alcançar metas.",
            "Preocupo-me com os riscos do uso indiscriminado."
        ]
    },
    {
        enunciado: "Você precisa criar um vídeo que represente sua jornada no fisiculturismo. O que você decide fazer?",
        alternativas: [
            "Gravar um treino usando uma câmera e editar o vídeo.",
            "Usar um software de edição para criar um vídeo com animações."
        ]
    },
    {
        enunciado: "Você tem um treino em grupo, mas um colega decidiu usar um método não convencional que não parece seguro. O que você faz?",
        alternativas: [
            "Acredito que cada um tem seu método.",
            "Acho importante discutir a segurança do plano de treino."
        ]
    },
    {
        enunciado: "Após meses de treino, você sente que precisa de um novo desafio. O que você faz?",
        alternativas: [
            "Participar de uma competição local.",
            "Experimentar um novo estilo de treino, como crossfit."
        ]
    },
];

let atual = 0;

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    for (const alternativa of perguntas[atual].alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.onclick = () => {
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                textoResultado.textContent = "Obrigado por participar!";
                caixaPerguntas.style.display = "none";
                caixaAlternativas.style.display = "none";
            }
        };
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();