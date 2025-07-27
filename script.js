// EmailJS Initialization
(function() {
  emailjs.init("lV0s0np9Q3EcT99oy"); // Replace with your EmailJS user ID
})();

// Handle form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_jxr104q", "template_r3a8r9d", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    });
});

// Filter pricing categories
function filterCategory(category) {
  const cards = document.querySelectorAll(".pricing-grid .card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "🌙 Dark" : "☀️ Light";
});

// Mobile Navigation Toggle
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("active");
});
