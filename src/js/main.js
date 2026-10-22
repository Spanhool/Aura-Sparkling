const nav = document.querySelector("header nav");
const menuButton = document.querySelector(".nav-toggle");
const menuLinks = document.querySelector(".nav-links");

function setMenuOpen(isOpen) {
  nav.dataset.menuOpen = String(isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

setMenuOpen(false);

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

menuLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

nav.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    menuButton.focus();
  }
});
