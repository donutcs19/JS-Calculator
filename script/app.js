const displayElement = document.getElementById("calculator-display")

const buttonPressed = (character) => {
  displayElement.value = displayElement.value + character
};

const compute = () => {
  displayElement.value = eval(displayElement.value)
};

const buttonDel = (character) => {
  displayElement.value = displayElement.value.slice(0 ,-1)
};

const buttonCls = () => {
  displayElement.value = ""
};
