const isKeyPressed = {
  Control: false, // ASCII code for 'a'
  n: false, // ASCII code for 'b'
};

document.onkeydown = (keyDownEvent) => {
  keyDownEvent.preventDefault();
  isKeyPressed[keyDownEvent.key] = true;
  if (isKeyPressed["Control"] && isKeyPressed["n"]) {
    const button = document.querySelector(".ytp-ad-skip-button-modern");

    if (button !== null) {
      button.click();
    } else {
      console.log("ads not found");
    }
  }
};

document.onkeyup = (keyUpEvent) => {
  keyUpEvent.preventDefault();
  if (isKeyPressed["Control"] && isKeyPressed["n"]) {
    isKeyPressed["Control"] = false;
    isKeyPressed["n"] = false;
  }
};
