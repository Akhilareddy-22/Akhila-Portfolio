// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".sticky-nav ul");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// ===== SMOOTH SCROLL =====
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    navMenu.classList.remove("show");
  });
});


// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ===== IMAGE MODAL POPUP =====
function maximizeImage(img) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

document.getElementById("image-modal").onclick = () => {
  document.getElementById("image-modal").style.display = "none";
};


// ===== THEME TOGGLE =====
const toggleBtn = document.querySelector(".theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// ===== SKILLS BAR ANIMATION =====
const skills = document.querySelectorAll(".progress");

function showSkills() {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      skill.style.width = skill.parentElement.previousElementSibling.lastElementChild.textContent;
    }
  });
}

window.addEventListener("scroll", showSkills);