//selecting all the Keys on the keyboard
const keys = document.querySelectorAll(".key");

//comparing the key press by user and the key that jiggle
document.addEventListener("keydown", (event) => {
  const activeKey = document.querySelector(".jiggle");
  if (activeKey.dataset.key === event.key.toUpperCase()) {
    activeKey.classList.remove("jiggle");
    const index = Math.floor(Math.random() * (keys.length - 1 - 0 + 1) + 0);
    keys[index].classList.add("jiggle");
  }
});
