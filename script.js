document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (!burgerBtn || !sidebar || !overlay) return;

  const toggleMenu = () => {
    burgerBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Bloque le scroll arrière-plan quand le menu est ouvert
    document.body.style.overflow = sidebar.classList.contains("active")
      ? "hidden"
      : "";
  };

  burgerBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Ferme automatiquement le menu sur redimensionnement vers un grand écran
  window.addEventListener("resize", () => {
    if (window.innerWidth > 600 && sidebar.classList.contains("active")) {
      toggleMenu();
    }
  });
});
