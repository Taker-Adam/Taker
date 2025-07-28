function toggleTheme() {
  document.documentElement.classList.toggle('dark-theme');
  document.documentElement.classList.toggle('light-theme');
}

function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('show');
}

document.querySelectorAll('#mobileNav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileNav').classList.remove('show');
  });
});

window.addEventListener('resize', () => {
  const nav = document.getElementById('mobileNav');
  if (window.innerWidth > 768) {
    nav.classList.remove('show');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById('reference');
  const fileDisplay = document.getElementById('file-name-display');

  if (fileInput && fileDisplay) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        fileDisplay.textContent = `Selected: ${file.name}`;
      } else {
        fileDisplay.textContent = '';
      }
    });
  }
});
