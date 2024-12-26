// 1. Dynamic Greeting Based on Time of Day
function dynamicGreeting() {
  const greetingElement = document.getElementById("greeting");
  const currentHour = new Date().getHours();
  let greetingText = "";

  if (currentHour < 12) {
    greetingText = "Good Morning! Ready to explore our delicious meals?";
  } else if (currentHour < 18) {
    greetingText = "Good Afternoon! Check out our catering services.";
  } else {
    greetingText = "Good Evening! End your day with a tasty meal from us.";
  }

  if (greetingElement) greetingElement.textContent = greetingText;
}

// 2. Contact Form Validation
function validateForm(event) {
  event.preventDefault(); // Prevents form submission for validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  alert("Thank you for reaching out! We'll get back to you soon.");
  return true;
}

// Attach form validation to the submit button
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", validateForm);
}

// 3. Highlight Services on Load
function highlightServices() {
  const serviceElements = document.querySelectorAll(".service");
  serviceElements.forEach((service, index) => {
    setTimeout(() => {
      service.classList.add("highlight");
    }, index * 300); // Adds delay for a staggered animation
  });
}

// 4. Smooth Scroll to Sections
function smoothScroll() {
  const links = document.querySelectorAll("a.scroll-link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Get section ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Initialize functions when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  dynamicGreeting();
  highlightServices();
  smoothScroll();
});
