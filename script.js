// ===== Sticky Navbar =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== Terminal Typing =====
const textLines = [
  "> Initializing Systems...",
  "> Loading MERN Stack...",
  "> ASP.NET Modules Ready...",
  "> Status: Available for Work"
];

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
  const terminal = document.getElementById("terminal-text");

  if (lineIndex < textLines.length) {
    if (charIndex < textLines[lineIndex].length) {
      terminal.innerHTML += textLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 30);
    } else {
      terminal.innerHTML += "<br/>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeEffect, 500);
    }
  }
}

window.addEventListener("load", typeEffect);

// ===== Scroll Reveal =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== Magnetic Button =====
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});
