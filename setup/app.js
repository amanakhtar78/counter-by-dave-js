let count = 0;
const value = document.getElementById("value");
const btns = document.getElementsByClassName("btn");

console.log(btns);

// Array.from(btns).forEach(function (item) {
[...btns].forEach(function (item) {
  console.log(item);

  item.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);
    let styles = e.currentTarget.classList;

    styles.contains("increase")
      ? (count = count + 1)
      : styles.contains("decrease")
      ? (count = count - 1)
      : (count = 0);
    count > 0
      ? (value.style.color = "red")
      : count < 0
      ? (value.style.color = "green")
      : (value.style.color = "yellow");
    value.textContent = count;
  });
  console.log(count);
});
