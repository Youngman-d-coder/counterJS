const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const pText = document.getElementById("pText");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  pText.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  pText.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  pText.textContent = count;
});
