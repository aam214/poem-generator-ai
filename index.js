function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let context =
    "You are an expert in short romantic American poetry and you deliver a very short poem. Strictly follow user input and deliver poem in HTML format.";
  let prompt = `User instrucions: generate brief American poem with ${instructionsInput.value} and include the name of the author at the end.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=8d9c6f00c08bcb1a3bo8fd87a4d1b4t6`;

  let boxElement = document.querySelector("main");
  boxElement.style.display = "block";
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem with a keyword of ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#searching");
poemFormElement.addEventListener("submit", generatePoem);
