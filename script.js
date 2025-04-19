// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Tab Switching
const projectsTab = document.getElementById("projects-tab");
const skillsTab = document.getElementById("skills-tab");
const certificationsTab = document.getElementById("certifications-tab");
const projectsContent = document.getElementById("projects-content");
const skillsContent = document.getElementById("skills-content");
const certificationsContent = document.getElementById("certifications-content");

function showProjects() {
  projectsTab.classList.add("active");
  skillsTab.classList.remove("active");
  certificationsTab.classList.remove("active");
  projectsContent.classList.add("active");
  skillsContent.classList.remove("active");
  certificationsContent.classList.remove("active");

  // Scroll to projects section
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function showSkills() {
  skillsTab.classList.add("active");
  projectsTab.classList.remove("active");
  certificationsTab.classList.remove("active");
  skillsContent.classList.add("active");
  projectsContent.classList.remove("active");
  certificationsContent.classList.remove("active");

  // Scroll to skills section
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function showCertifications() {
  certificationsTab.classList.add("active");
  projectsTab.classList.remove("active");
  skillsTab.classList.remove("active");
  certificationsContent.classList.add("active");
  projectsContent.classList.remove("active");
  skillsContent.classList.remove("active");

  // Scroll to certifications section
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

projectsTab.addEventListener("click", showProjects);
skillsTab.addEventListener("click", showSkills);
certificationsTab.addEventListener("click", showCertifications);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Handle tab buttons
    if (href === "#projects-tab") {
      e.preventDefault();
      showProjects();
      return;
    } else if (href === "#skills-tab") {
      e.preventDefault();
      showSkills();
      return;
    } else if (href === "#certifications-tab") {
      e.preventDefault();
      showCertifications();
      return;
    }

    // Regular anchor links
    const targetId = href;
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Add matrix background effect
function createMatrixEffect() {
  const chars = "01";
  const matrix = document.querySelector(".matrix-code");
  const columns = Math.floor(document.body.clientWidth / 10);
  const rows = Math.floor(document.body.clientHeight / 20);

  let code = "";
  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < columns; j++) {
      line += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    code += line + "\n";
  }

  matrix.textContent = code;
}

// Initialize matrix effect
createMatrixEffect();
window.addEventListener("resize", createMatrixEffect);
