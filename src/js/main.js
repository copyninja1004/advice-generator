const button = document.querySelector(".card__dice-container__cta");
const card = document.querySelector(".card");
const ID = document.querySelector(".card__advice-id");
const ADVICE = document.querySelector(".card__advice");

let randomAdvice;
let randomAdviceId;

button.addEventListener("click", () => {
  card.classList.add("card--shake");
  setTimeout(() => {
    getAdvice();
  }, 500);
});

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      randomAdviceId = data.slip.id;
      randomAdvice = data.slip.advice;
      displayAdvice(randomAdviceId, randomAdvice);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const displayAdvice = (id, advice) => {
  ID.textContent = `ADVICE #${id}`;
  ADVICE.textContent = `“${advice}”`;
  card.classList.contains("card--shake")
    ? card.classList.remove("card--shake")
    : false;
};

getAdvice();
