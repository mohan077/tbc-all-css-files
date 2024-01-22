const gameText = document.getElementById("game-text");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const healthDisplay = document.getElementById("health");

let health = 100;

function updateHealth() {
  healthDisplay.textContent = `Health: ${health}`;
}

function displayScene(sceneText, optionTexts) {
  gameText.textContent = sceneText;
  optionA.textContent = `A. ${optionTexts[0]}`;
  optionB.textContent = `B. ${optionTexts[1]}`;
  optionC.textContent = `C. ${optionTexts[2]}`;
  optionD.textContent = `D. ${optionTexts[3]}`;
  updateHealth();
}

// Example scenes and options
const scenes = [
  {
    text: "Welcome to the world of Harry Potter! You find yourself outside the Forbidden Forest.",
    options: [
      "Enter the Forbidden Forest in search of magical creatures.",
      "Head to Hagrid's hut to ask for advice.",
      "Make your way to the Quidditch pitch for a friendly match.",
      "Go to the library to research dark creatures in the Forbidden Forest."
    ]
  },
  // Define more scenes and options here
];

let currentSceneIndex = 0;

function handleOptionClick(optionIndex) {
  // Implement your logic here based on the chosen option and update the scene accordingly
  // Don't forget to update the health as well
}

// Initial display
displayScene(scenes[currentSceneIndex].text, scenes[currentSceneIndex].options);

optionA.addEventListener("click", () => handleOptionClick(0));
optionB.addEventListener("click", () => handleOptionClick(1));
optionC.addEventListener("click", () => handleOptionClick(2));
optionD.addEventListener("click", () => handleOptionClick(3));