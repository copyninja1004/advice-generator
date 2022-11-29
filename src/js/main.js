const button = document.querySelector(".card__dice-container__cta");
const card = document.querySelector(".card");
const ID = document.querySelector(".card__advice-id");
const ADVICE = document.querySelector(".card__advice");

button.addEventListener("click", () => {
  card.classList.add("card--shake");
  setTimeout(() => {
    getAdvice();
  }, 500);
});

async function getAdvice() {
  await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    cache: "no-store",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })

    .then((data) => {
      displayAdvice(data.slip.id, data.slip.advice);
    });
}

const displayAdvice = (id, advice) => {
  ID.textContent = `ADVICE #${id}`;
  ADVICE.textContent = `“${advice}”`;
  if (card.classList.contains("card--shake")) {
    card.classList.remove("card--shake");
  }
};

getAdvice();
