// swiper-slider initialization

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true, 
  speed:600,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 4300,
    disableOnInteraction: true,
   
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// naming dom elements
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".features");
const hamClicked = document.querySelector(".hamClicked");
const allMicrosoftOpt = document.querySelector(".allMicrosoftOpt");
const allMicrosoft = document.querySelector(".allMicrosoft");
const allMicrosoft_text = document.querySelector(".allMicrosoft_text");
const backToTop_btn = document.querySelector(".backToTop_btn");
const search_bar = document.querySelector(".search_bar");
const search_btn = document.querySelector(".search_btn");
const closeSearch_btn = document.querySelector(".closeSearch_btn");
const search_bar_D = document.querySelector(".search_bar_D");
const search_btn_D = document.querySelector(".search_btn_D");
const closeSearch_btn_D = document.querySelector(".closeSearch_btn_D");
const backToTop_scrollPx = 400;

// js functions
function showSidebar() {
  hamburger.classList.toggle("hidden");
  hamClicked.classList.toggle("hidden");
  sidebar.classList.toggle("hidden");
}

function showAllMicrosoftOpt() {
  allMicrosoftOpt.classList.toggle("md:flex");
  allMicrosoft.classList.toggle("bg-[#f2f2f2]");
  // allMicrosoft_text.classList.toggle("pb-0.5");
  allMicrosoft.classList.toggle("py-[15px]");
  allMicrosoft.classList.toggle("pl-3");
  // allMicrosoft.classList.toggle("-translate-y-[2.8px]");
  allMicrosoft_text.classList.toggle("hover:border-black");
}

const navContent = Array.from(document.getElementsByClassName("nav-content"));

// handling search-bar in mobile
function searchClicked() {
  search_bar.classList.remove("hidden");
  search_bar.focus();
  navContent.forEach((content) => content.classList.add("hidden"));
  hamburger.classList.add("hidden");
  closeSearch_btn.classList.remove("hidden");
}
function closeSearch() {
  search_bar.classList.add("hidden");
  navContent.forEach((content) => content.classList.remove("hidden"));
  closeSearch_btn.classList.add("hidden");
  hamburger.classList.remove("hidden");
}

// handling search-bar in desktop
const navContent_Desktop = Array.from(
  document.querySelectorAll(".navContent_Desktop")
);

function searchClicked_D() {
  navContent_Desktop.forEach((content) => content.classList.add("hidden"));
  document.querySelector(".navContent-features").classList.add("md:hidden");
  document.querySelector(".search_btn_D span").classList.remove("2xl:block");

  document.querySelector(".microsoft_logo").classList.add("-mx-3");
  search_btn_D.classList.add("-translate-x-7");
  search_bar_D.classList.remove("hidden");
  search_bar_D.focus();
  closeSearch_btn_D.classList.remove("hidden");
}
function closeSearch_D() {
  navContent_Desktop.forEach((content) => content.classList.remove("hidden"));
  document.querySelector(".navContent-features").classList.remove("md:hidden");
  document.querySelector(".search_btn_D span").classList.add("2xl:block");

  document.querySelector(".microsoft_logo").classList.remove("-mx-3");
  search_btn_D.classList.remove("-translate-x-7");
  search_bar_D.classList.add("hidden");
  closeSearch_btn_D.classList.add("hidden");
}

function handleScroll() {
  if (document.documentElement.scrollTop > backToTop_scrollPx) {
    backToTop_btn.classList.remove("sm:hidden");
    backToTop_btn.classList.add("sm:flex");
  } else {
    backToTop_btn.classList.add("sm:hidden");
    backToTop_btn.classList.remove("sm:flex");
  }
}

// handle search click in mobile
search_btn.addEventListener("click", searchClicked);
closeSearch_btn.addEventListener("click", closeSearch);

// handle search click in desktop
search_btn_D.addEventListener("click", searchClicked_D);
closeSearch_btn_D.addEventListener("click", closeSearch_D);

allMicrosoft.addEventListener("click", showAllMicrosoftOpt);

// conditionally showing 'back to top' button
document.addEventListener("scroll", handleScroll);
