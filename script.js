document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Tab Switching
  const tabs = [
    {
      buttonId: "projects-tab",
      contentId: "projects-content",
      sectionId: "projects",
    },
    {
      buttonId: "skills-tab",
      contentId: "skills-content",
      sectionId: "projects",
    },
    {
      buttonId: "certifications-tab",
      contentId: "certifications-content",
      sectionId: "projects",
    },
  ];

  tabs.forEach((tab) => {
    const button = document.getElementById(tab.buttonId);
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabs.forEach((t) => {
        document.getElementById(t.buttonId).classList.remove("active");
        document.getElementById(t.contentId).classList.remove("active");
      });

      // Add active class to clicked tab
      button.classList.add("active");
      document.getElementById(tab.contentId).classList.add("active");

      // Scroll to section
      document
        .getElementById(tab.sectionId)
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Handle tab buttons
      const tab = tabs.find((t) => `#${t.buttonId}` === href);
      if (tab) {
        e.preventDefault();
        document.getElementById(tab.buttonId).click(); // Trigger tab click
        // Close mobile menu if open
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
        return;
      }

      // Regular anchor links
      const targetElement = document.querySelector(href);
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

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
