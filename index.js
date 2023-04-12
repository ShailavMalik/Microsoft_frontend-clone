const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".features");
const hamClicked = document.querySelector(".hamClicked");
const allMicrosoftOpt = document.querySelector(".allMicrosoftOpt");
const allMicrosoft=document.querySelector(".allMicrosoft")

function showSidebar() {
  hamburger.classList.toggle("hidden");
  hamClicked.classList.toggle("hidden");
  sidebar.classList.toggle("hidden");
}

function showAllMicrosoftOpt() {
  allMicrosoftOpt.classList.toggle("md:flex");
  allMicrosoft.classList.toggle("bg-[#f2f2f2]");
  allMicrosoft.classList.toggle("pb-1");
  allMicrosoft.classList.toggle("py-3.5");
}
