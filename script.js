const closedCookie = document.querySelector("#closedCookie");
const stepOne = document.querySelector(".stepOne");
const stepTwo = document.querySelector(".stepTwo");
const phrase = document.querySelector(".phrase");
const openAgain = document.querySelector(".openAgain");

const luckyPhrases = [
  "A persistência leva à conquista.",
  "Acredite em você mesmo e tudo será possível.",
  "O sucesso nasce do querer, da determinação e persistência.",
  "A sorte favorece a mente preparada.",
  "Grandes realizações exigem grande dedicação.",
  "Seja a mudança que você deseja ver no mundo.",
  "A vida é 10% o que acontece e 90% como você reage a isso.",
  "O segredo para ficar à frente é começar.",
  "Acredite em milagres, mas não dependa deles.",
  "A sorte sorri para aqueles que continuam a tentar.",
  "Não tenha medo de desistir do bom para perseguir o ótimo.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Seja corajoso. Mesmo que você não seja, finja ser. Ninguém pode diferenciar.",
  "O otimismo é a fé em ação.",
  "Sua jornada nunca termina. A cada passo, uma nova aventura.",
  "A verdadeira sabedoria está em saber que você não sabe tudo.",
  "Acredite nos seus sonhos e eles se tornarão realidade.",
  "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa.",
  "As melhores coisas da vida não são coisas.",
  "O tempo é uma ilusão. O almoço, mais ainda.",
];

const handleOpenCookie = () => {
  const randomIndex = Math.floor(Math.random() * luckyPhrases.length);
  const luckyPhrase = luckyPhrases[randomIndex];
  stepOne.classList.add("hide");
  stepTwo.classList.remove("hide");
  phrase.innerHTML = luckyPhrase;
};

const handleOpenAgain = () => {
  stepOne.classList.remove("hide");
  stepTwo.classList.add("hide");
};

closedCookie.addEventListener("click", handleOpenCookie);
openAgain.addEventListener("click", handleOpenAgain);
