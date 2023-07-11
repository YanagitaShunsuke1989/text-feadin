const textAnime = document.getElementById("text-anime");
const splitText = [...textAnime.innerHTML];

const wrapCharSpan = () => {
  return splitText.map((char) => `<span>${char}</span>`).join("");
};

textAnime.innerHTML = wrapCharSpan(textAnime.textContent);

setInterval(() => {
  textAnime.classList.add("-visible");
  setTimeout(() => {
    textAnime.classList.remove("-visible");
  }, 2000);
}, 4000);
