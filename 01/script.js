// Sélection de l'élément racine :root
const root = document.documentElement;

// Modifier une variable via JS
function changerCouleurJS() {
  root.style.setProperty('--color-primary', '#00E676');
}

// Lire une variable via JS
function lireVariableJS() {
  const val = getComputedStyle(root).getPropertyValue('--color-primary').trim();
  alert('Valeur de --color-primary : ' + val);
}

// Basculer la classe .theme-warm pour tester la surcharge locale
function toggleTheme() {
  document.body.classList.toggle('theme-warm');
}