function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Whose woods these are I think I know.",
    autoStart: true,
    delay: 40,
  });
}

let poemFormElement = document.querySelector("#searching");
poemFormElement.addEventListener("submit", generatePoem);
