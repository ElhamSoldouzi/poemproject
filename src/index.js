function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4e4452b3b8e30dte63o4ebba04a0fef4";
  let context =
    "You are a romantic poem expert and love to write short poems your mission is to generate 4 line poem in basic HTML. and seperate each line with a <br />. make sure to follow user instructuions. Do not include the title to the poem.Sign the poem with 'SheCodes AI' inside a <strong>element and NOT at beginning.";
  let prompt = `user instructions:Generate an English poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating an English poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
