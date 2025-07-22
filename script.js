const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Optional: Handle form submission with a confirmation alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      // You can remove this preventDefault if you use Formspree
      // e.preventDefault(); // Uncomment this line if you're testing without Formspree

      // Optional confirmation (can be removed)
      alert("Message sent successfully!");
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleButton.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
});
