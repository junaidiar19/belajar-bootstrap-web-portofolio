// define the button theme
const toggleBtn = document.getElementById("button-theme");

// define the local storage of dark-mode
let darkMode = localStorage.getItem("dark-mode");

// function to enable dark mode
const enableDarkMode = () => {
  document.documentElement.setAttribute("data-bs-theme", "dark");
  toggleBtn.classList.remove("btn-light");
  toggleBtn.classList.add("btn-dark");
  toggleBtn.innerHTML = '<i class="bi-sun"></i>';
  localStorage.setItem("dark-mode", "enabled");
};

// function to disable dark mode
const disableDarkMode = () => {
  document.documentElement.setAttribute("data-bs-theme", "light");
  toggleBtn.classList.remove("btn-dark");
  toggleBtn.classList.add("btn-light");
  toggleBtn.innerHTML = '<i class="bi-moon-stars"></i>';
  localStorage.setItem("dark-mode", "disabled");
};

// check if dark mode is enabled
if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

// add event listener to button theme
toggleBtn.addEventListener("click", e => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode) {
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  } else {
    enableDarkMode();
  }
});
