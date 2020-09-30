const darkContainer = document.querySelector(".container");
const bodyContainer = document.querySelector("body");
const themeText = document.querySelector(".switch-container p");
const themeSwitch = document.querySelector(".switch");

themeSwitch.addEventListener("change", () => {
  const isDark = darkContainer.classList.toggle("container-dark");
  bodyContainer.style.backgroundColor = isDark ? "hsl(230, 17%, 14%)" : "#fff";
  themeText.textContent = `${isDark ? "Dark" : "Light"} mode`;
});
