function toggleTheme() {
  document.documentElement.classList.toggle('dark-theme');
  document.documentElement.classList.toggle('light-theme');
}

function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('show');
}
