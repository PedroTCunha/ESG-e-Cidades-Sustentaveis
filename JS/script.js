
//LOGICAPOPUP
const popupContent = {
  'prosperidade': {
    title: "Prosperidade",
    content: `
<p>Prosperidade nas cidades vai além de grandes arranha-céus e vitrines chamativas. As cidades sustentáveis
não apenas oferecem melhor qualidade de vida, como também servem como motores de desenvolvimento econômico.
Uma cidade, verdadeiramente próspera, se destaca por:
</p>
<hr>
<ul>
<li>Sustentabilidade Ambiental: Implantar práticas ecológicas, como transporte público eficiente, energia
renovável e gestão de resíduos;</li>
<li>Oportunidades Econômicas: Geração de empregos decentes e renda justa para todos os cidadãos;</li>
<li>Bem-Estar Social: Acesso universal à educação de qualidade, saúde preventiva e serviços sociais
eficientes;</li>
<li>Governança Eficaz: Gestão pública transparente, eficiente e participativa, com foco no bem-estar da
população.</li>
</ul>
`
  },
  'gestao': {
    title: "Gestão",
    content: `
<p>A gestão em cidades sustentáveis ​​envolve a implementação de políticas e práticas que visam promover o
desenvolvimento urbano de forma equilibrada, considerando os aspectos ambiental, social e econômico. O
objetivo central é atender às necessidades da geração presente sem comprometer a capacidade das futuras
gerações de suprir suas próprias necessidades.
</p>
<hr>
<ul>
<li>Planejamento integrado e participativo: Envolve a colaboração de diversos setores da sociedade, incluindo
governos, empresas, comunidades e instituições acadêmicas, na construção de uma visão de longo prazo para a
cidade;</li>
<li>Preservação do meio ambiente: Protege os recursos naturais e os serviços ecossistêmicos, combatendo a
poluição e promovendo a recuperação de áreas degradadas;</li>
<li>Mobilidade urbana sustentável: Prioriza meios de transporte mais limpos e eficientes, como transporte
público, bicicletas e caminhadas, além de reduzir a dependência do automóvel particular;</li>
<li>Governança transparente e responsável: Assegura a participação da população na tomada de decisões e a
gestão pública eficiente e transparente.</li>
</ul>
`
  },
  'bem-estar': {
    title: "Bem-Estar",
    content: `
<p>O bem-estar nas cidades sustentáveis ​​é uma construção coletiva que exige o engajamento de governos,
empresas, comunidades e indivíduos. Através da participação cidadã, da implementação de políticas públicas
adequadas e da adoção de hábitos sustentáveis, podemos criar cidades mais prósperas, justas e saudáveis para
todos. Alguns elementos para o bem-estar são:
</p>
<hr>
<ul>
<li>Ar puro: Redução da poluição do ar através de transporte sustentável, áreas verdes e controle de emissões;
</li>
<li>Áreas para pedestres: Ruas amigáveis ​​para pedestres, com calçadas largas, arborizadas e acessíveis;</li>
<li>Acesso à saúde: Sistema de saúde universal e de qualidade, com atendimento preventivo e especializado;
</li>
<li>Renda justa: Distribuição equitativa da renda para reduzir a pobreza e a desigualdade social.</li>
</ul>
`
  },
  'seguranca': {
    title: "Segurança e Infraestrutura",
    content: `
<p>A segurança e a infraestrutura são elementos que não podem faltar ​​no desenvolvimento sustentável nas
cidades. Através de uma abordagem integrada que combine planejamento urbano, tecnologia e participação da
comunidade, podemos construir cidades mais seguras, resilientes e habitáveis para todos.
</p>
<hr>
<ul>
<li>Previne crimes e acidentes: Através de policiamento ostensivo, monitoramento inteligente, iluminação
adequada e design urbano que desestimula a criminalidade;</li>
<li>Gerencia riscos: Possui planos de contingência para lidar com desastres naturais, emergências de saúde
pública e outros eventos críticos;</li>
<li>É acessível: Garante o acesso universal a serviços básicos como transporte público, educação, saúde e
moradia;</li>
<li>Promove a mobilidade ativa: Prioriza meios de transporte sustentáveis como bicicletas, caminhadas e
transporte público.</li>
</ul>
`
  },
  'servicos': {
    title: "Serviços Básicos",
    content: `
<p>Cidades sustentáveis se caracterizam por ir além da mera oferta de serviços básicos. Elas visam garantir o
acesso universal a serviços de qualidade, com foco na eficiência, na sustentabilidade e na inclusão social.
</p>
<hr>
<ul>
<li>Rede de distribuição eficiente: Minimizar perdas de água e garantir o acesso universal à água potável de
qualidade;</li>
<li>Drenagem urbana adequada: Evitar alagamentos e outros problemas relacionados à água da chuva;</li>
<li>Fornecimento de energia limpa e renovável: Reduzir a emissão de gases poluentes e combater as mudanças
climáticas;</li>
<li>Infraestrutura escolar adequada: Escolas com boa estrutura física e recursos didáticos de qualidade.</li>
</ul>
`
  }
};

window.openPopup = function(contentId) {
  const popup = document.getElementById("popup");
  const contentDiv = document.getElementById("popup-content");

  contentDiv.innerHTML = `
    <h2>${popupContent[contentId].title}</h2>
    ${popupContent[contentId].content}
  `;

  popup.style.display = "block";
};

window.closePopup = function() {
  document.getElementById("popup").style.display = "none";
};

//LÓGICA DO RANKING
const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideWidth = 800; // Largura de cada slide
let currentSlide = 0;

prevBtn.addEventListener("click", () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

nextBtn.addEventListener("click", () => {
  currentSlide = Math.min(currentSlide + 1, 6); // Máximo de 6 slides (0-indexado)
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

//LÓGICA DO QUIZ
const slides = document.querySelectorAll(".slide");
const quizSection = document.getElementById("quiz");
let slideAtual = 0;

function mostrarSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === n);
  });
}

function embaralharRespostas(respostas) {
  for (let i = respostas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [respostas[i], respostas[j]] = [respostas[j], respostas[i]];
  }
  return respostas;
}

function verificarResposta(resposta) {
  if (resposta === "correta") {
    slideAtual++;
    if (slideAtual >= slides.length) {
      if (confirm("Teste Concluído! Deseja reiniciar o quiz?")) {
        slideAtual = 0;
        slides.forEach(slide => {
          const respostas = slide.querySelectorAll(".resposta");
          const respostasEmbaralhadas = embaralharRespostas([...respostas]);
          const respostasContainer = slide.querySelector(".respostas");

          respostasContainer.replaceChildren(...respostasEmbaralhadas);
        });
        mostrarSlide(slideAtual);
        quizSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      mostrarSlide(slideAtual);
    }
  } else {
    alert("Alguns homens só querem ver o mundo pegando fogo. Tente novamente!");
  }
}

slides.forEach(slide => {
  const respostas = slide.querySelectorAll(".resposta");
  const respostasEmbaralhadas = embaralharRespostas([...respostas]);
  const respostasContainer = slide.querySelector(".respostas");

  respostasContainer.replaceChildren(...respostasEmbaralhadas);

  respostasEmbaralhadas.forEach((resposta) => {
    resposta.addEventListener("click", () => {
      verificarResposta(resposta.dataset.resposta);
    });
  });
});

mostrarSlide(slideAtual);
