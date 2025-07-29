// Load theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.documentElement.classList.add(storedTheme);
  } else {
    document.documentElement.classList.add("light-theme");
  }

  const fileInput = document.getElementById("reference");
  const fileDisplay = document.getElementById("file-name-display");

  if (fileInput && fileDisplay) {
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      fileDisplay.textContent = file ? `Selected: ${file.name}` : "";
    });
  }
});

// Toggle theme
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark-theme");

  root.classList.toggle("dark-theme", !isDark);
  root.classList.toggle("light-theme", isDark);

  localStorage.setItem("theme", isDark ? "light-theme" : "dark-theme");
}

// Mobile nav toggle
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("show");
}

// Auto-close mobile menu
document.querySelectorAll("#mobileNav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileNav").classList.remove("show");
  });
});

window.addEventListener("resize", () => {
  const nav = document.getElementById("mobileNav");
  if (window.innerWidth > 768) {
    nav.classList.remove("show");
  }
});
