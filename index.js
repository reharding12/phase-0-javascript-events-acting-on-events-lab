const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
  
    const gameWidth = 400;
    const dodgerWidth = 40;
  
    if (right + dodgerWidth < gameWidth) {
      right += 1;
      dodger.style.left = `${right}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });