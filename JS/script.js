/* Estilos gerais */
* {
  font-family:'Roboto', sans-serif; 
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #008080;
}

/* Cabeçalho */
header {
  background-color: #232734;
  color: #fff;
  padding: 20px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}


.logo {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.logo img {
  border-radius: 30px;
  width: 110px;
  margin-right: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline-block; /* Exibe os botões lado a lado */
  margin-right: 20px;
}

nav ul li a {
  border: 2px solid black;
  outline: none;
  padding: 10px 20px;
  border-radius: 30px;
  background-color: #fff;
  color: #232734;
  cursor: pointer;
  text-decoration: none;
}

/* Menu Toggle */
.menu-toggle {
  display: none;
  cursor: pointer;
  position: relative;
  z-index: 3;
}

.bar {
  display: block;
  width: 25px;
  height: 4px;
  margin: 5px auto;
  background-color: #fff;
  transition: transform 0.3s ease;
}

/* Estilos para o menu toggle quando ativo */
.menu-toggle.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Conteúdo */
.content-container {
  padding: 20px;
  max-width: 1500px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.6;
  z-index: 1;
}

/* ESG */
#esg {
  height: 600px;
  margin-top: 20px;
  padding-top: 90px;
  background-color: #40e0d0;
  border: 0px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

#esg h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

#esg .esg-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#esg img {
  background-size: cover;
  width: 45%;
  height: auto;
}

#esg .esg-text {
  text-align: left;
  line-height: 32px;
  align-content: center;
  width: 50%;
  font-size: 18px;
}

/* CS */
#cs {
  height: 600px;
  padding-top: 90px;
  background-color: #40e0d0;
}

#cs h1 {
  text-align: right;
  font-size: 32px;
  margin-bottom: 20px;
}


#cs .cs-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#cs img {
  background-size: cover;
  width: 45%;
  height: auto;
}

#cs .cs-text {
  text-align: left;
  line-height: 32px;
  align-content: center;
  width: 50%;
  font-size: 18px;
}

/* Es-cidades */
#es-cidades {
  height: 300px;
  padding-top: 90px;
}

#es-cidades h1 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
}

#es-cidades txt {
  text-align: left;
  align-content: center;
  font-size: 18px;
  width: 100%;
  line-height: 32px;
}

/* Pilares */
#pilares {
  height: 300px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.pentagono-background {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 250px;
  background-color: #40e0d0;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  z-index: -1;
  margin-bottom: 20px;
}

.pentagono {
  width: 300px;
  height: 250px;
  position: relative;
  margin: auto;
  margin-bottom: auto;
  padding: auto;
  margin-bottom: 20px;
}

.pentagono button {
  z-index: 1;
  position: absolute;
  width: 85px;
  height: 35px;
  transform-origin: 50% 100%;
  font-size: 12px;
  text-align: center;
  border: none; /* Sem borda nos botões */
  border-radius: 5px; /* Borda arredondada */
  background-color: #fff; /* Cor de fundo dos botões */
  color: #37c0b2a5; /* Cor do texto dos botões */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transição de cor no hover */
}

.pentagono button:hover {
  background-color: #007bff; /* Cor de fundo ao passar o mouse */
  color: #fff; /* Cor do texto ao passar o mouse */
}

.pentagono button:nth-child(1) {
  top: -13%;
  left: 35%;
}

.pentagono button:nth-child(2) {
  top: 30%;
  left: 100%;
}

.pentagono button:nth-child(3) {
  top: 100%;
  left: 70%;
}

.pentagono button:nth-child(4) {
  top: 100%;
  left: 0%;
  margin-bottom: 20px;
}

.pentagono button:nth-child(5) {
  top: 30%;
  left: -28.5%;
  margin-bottom: 20px;
}

.popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 90%;
  max-width: 500px;
}

/* Ranking */
#ranking {
  text-align: center;
  margin-bottom: 40px;
  background-color: #e0f2f7;
}

#ranking h1 {
  font-size: 32px;
  text-align: center;
  align-self: center;
  margin-top: 20px;
  font-size: 32px;
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 600px;
  align-content: center;
  overflow: hidden;
  margin: 0 auto;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  color: white;
  text-align: left;
  line-height: 30px;
}

.carousel-slide h3 {
  font-size: 35px;
  margin-bottom: 10px;
}

.carousel-slide:nth-child(1) {
  background: no-repeat;
  background-image: url(../IMG/brasil.jpg);
  background-size: cover;
}

.carousel-slide:nth-child(2) {
  background: no-repeat;
  background-image: url(../IMG/america.jpg);
  background-size: cover;
}

.carousel-slide:nth-child(3) {
  background: no-repeat;
  background-image: url(../IMG/europa.jpg);
  background-size: cover;
}

.carousel-slide:nth-child(4) {
  background: no-repeat;
  background-image: url(../IMG/africa.jpg);
  background-size: cover;
}

.carousel-slide:nth-child(5) {
  background: no-repeat;
  background-image: url(../IMG/asia.jpg);
  background-size: cover;
}

.carousel-slide:nth-child(6) {
  background: no-repeat;
  background-image: url(../IMG/oceania.jpg);
  background-size: cover;
}

.carousel-slide:nth-child(7) {
  background: no-repeat;
  background-image: url(../IMG/mundial.jpg);
  background-size: cover;
}

.carousel-nav {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.carousel-nav button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
}

/* Quiz */
#quiz {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #40e0d0; 
  border: 0px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

#quiz h1 {
  font-size: 32px;
  text-align: center;
}

.questionario-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 50px auto;
  font-family: sans-serif;
  overflow: hidden; 
}

.carrossel {
  width: 100%;
  position: relative;
}

.slide {
  display: none; /* Inicialmente escondemos todos os slides */
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: transform 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
}

.slide.active {
  display: flex; /* Mostramos o slide ativo */
  position: relative;
  transform: translateX(0);
  transition: transform 1s ease-in-out; /* Adicionamos a transição */
}

.slide.previous {
  display: flex;
  transform: translateX(-100%);
}

.slide.next {
  display: flex;
  transform: translateX(100%);
}

.respostas {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-content: center;
  width: 100%;
}

.resposta {
  padding: 20px 30px;
  margin: 15px;
  cursor: pointer;
  align-self: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: background-color 1s ease;
  width: 30%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.resposta::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

.resposta:hover::before {
  opacity: 0.4;
  background-image: url(../IMG/Errado.gif);
}

.resposta.correta:hover::before {
  opacity: 0.4;
  background-image: url(../IMG/Correto.gif);
}

/* Rodapé */
footer {
  background-color: #232734;
  color: #fff;
  text-align: center;
  padding: 20px;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  margin-top: 0px;
  margin-bottom: 0px;
}

/* Responsividade */
@media (max-width: 768px) {
  .content-container {
    padding: 10px;
    font-size: 12px;
  }

  nav ul {
    display: none; /* Oculta o menu em telas menores */
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #232734;
  }

  nav ul li {
    display: block; /* Cada item do menu fica em uma linha */
    margin: 20px 0; /* Espaçamento entre itens do menu */
    text-align: center;
  }

  .menu-toggle {
    display: block; /* Exibe o botão do menu toggle */
  }

  #pilares {
    margin-top: 300px;
  }

  .pentagono-background {
    width: 250px;
    height: 200px;
  }

  .pentagono {
    width: 250px;
    height: 200px;
  }

  .pentagono button {
    width: 60px;
    height: 20px;
    font-size: 10px;
  }

  .btn-{
    width: 40px;
    height: 15px;
    font-size: 5px;
  }

  .carousel-container {
    height: 450px;
  }

  .carousel-slide {
    height: 450px;
  }

  #esg .esg-container,
  #cs .cs-container {
    flex-direction: column;
  }

  #esg img,
  #cs img {
    width: 100%;
    margin-bottom: 20px;
  }

  #esg .esg-text,
  #cs .cs-text {
    width: 100%;
  }

  .questionario-container{
    width: 100%;
  }

  .resposta{
    width: 90%;
    height: 70%;
    align-content: center;
  }
}

/* Estilos para o menu quando ativo (tela pequena) */
.redirect.active ul {
  display: block;
}
