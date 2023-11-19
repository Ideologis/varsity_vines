"strict"; 
const hamburger = document.querySelector(".fa-bars");
const closemenu = document.querySelector(".fa-regular");
const Navbody = document.querySelector(".nav_text");
const toTop = document.querySelector(".top");

// HAMBURGER FUNCTION
function openMenu() {
  Navbody.style.transform = "translateX(0)";
}
function closeMenu() {
  Navbody.style.transform = "translateX(-200%)";
}

hamburger.addEventListener("click", openMenu);
closemenu.addEventListener("click", closeMenu);

// SCROLL TO TOP
const bodyEl = document.documentElement;

function showbtn() {
  const scrollTotal = bodyEl.scrollHeight - bodyEl.clientHeight;
  if (bodyEl.scrollTop / scrollTotal > 0.1) {
    toTop.classList.add("show_btn");
  } else {
    toTop.classList.remove("show_btn");
  }
}
function scrollTop() {
    bodyEl.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

toTop.addEventListener("click", scrollTop);
document.addEventListener("scroll", showbtn);
