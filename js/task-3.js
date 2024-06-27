
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const updateNameOutput = () => {
  const value = nameInput.value;
  const trimmedValue = value.trim();

  if (trimmedValue !== "") {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}

nameInput.addEventListener("input", updateNameOutput);