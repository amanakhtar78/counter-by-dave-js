let count = 0;
const value = document.getElementById("value");
const btns = document.getElementsByClassName("btn");
const decrease = document.getElementById("decrease");
const increaseButton = document.getElementsByClassName("increase")[0];

decrease.addEventListener("click", function () {
  count = count + 1;

  if (count > 0) {
    value.style.color = "red";
  }

  value.textContent = count;
});
increaseButton.addEventListener("click", function () {
  count = count - 1;

  if (count < 0) {
    value.style.color = "green";
  }

  value.textContent = count;
});
