// Tilføj sprog knapper
document.getElementById("btn-da").addEventListener("click", () => switchLanguage("da"));
document.getElementById("btn-en").addEventListener("click", () => switchLanguage("en"));

function switchLanguage(lang) {
  // "brug" af knapper
  document.getElementById("btn-da").classList.toggle("active", lang === "da");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");

  // Find alle elementer med data-da/data-en
  const elements = document.querySelectorAll("[data-da]");
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// SPROGSKIFT (som jeg allerede har)
document.getElementById("btn-da").addEventListener("click", () => switchLanguage("da"));
document.getElementById("btn-en").addEventListener("click", () => switchLanguage("en"));

function switchLanguage(lang) {
  document.getElementById("btn-da").classList.toggle("active", lang === "da");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");

  const elements = document.querySelectorAll("[data-da]");
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// MODAL ÅBN/LUK
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Luk ved klik udenfor boksen
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});