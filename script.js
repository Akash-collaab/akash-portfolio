// ===== Sticky Navbar =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Terminal Typing =====
const textLines = [
  "> Initializing AI Systems...",
  "> Loading Neural Models...",
  "> Deploying Full-Stack Solutions...",
  "> Status: Available for Work"
];

let lineIndex = 0;
let charIndex = 0;
const speed = 35;

function typeEffect() {
  const terminal = document.getElementById("terminal-text");

  if (lineIndex < textLines.length) {
    if (charIndex < textLines[lineIndex].length) {
      terminal.innerHTML += textLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, speed);
    } else {
      terminal.innerHTML += "<br/>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeEffect, 600);
    }
  }
}

window.addEventListener("load", typeEffect);
