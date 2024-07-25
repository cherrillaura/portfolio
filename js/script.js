

//For animation from left & from top
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");
  const heroFader = heroSection.querySelector(".content");

  const imgSection = document.querySelector(".about");
  const imgFader = imgSection.querySelector(".about-img");
  const contentFader = imgSection.querySelector(".content");

  const educationSection = document.querySelector(".education");
  const educationFader = educationSection.querySelectorAll(".education-page, .skills");

  const workSection = document.querySelector(".work");
  const workFader = workSection.querySelectorAll(".experience-info1, .experience-info2, .experience-img");

  const contactSection = document.querySelector(".contact");
  const contactFader = contactSection.querySelectorAll(".contact-info");


  const elements = document.querySelectorAll(".about-me, .education-skills, .working-experience, .contact-me, .my-project");


  // Options for IntersectionObserver
  const appearOptions = {
    threshold: 0.5,
  };

  // IntersectionObserver for hero & elements
  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  // Observe hero content
  appearOnScroll.observe(heroFader);

  // Observe image content
  appearOnScroll.observe(imgFader);

  // Observe about section content
  appearOnScroll.observe(contentFader);

  // Observe education section content
  educationFader.forEach((educationFader) => {
    appearOnScroll.observe(educationFader);
  });

  // Observe work section content
  workFader.forEach((workFader) => {
    appearOnScroll.observe(workFader);
  });

  // Observe contact section content
  contactFader.forEach((contactFader) => {
    appearOnScroll.observe(contactFader);
  });

  // Observe other elements
  elements.forEach((element) => {
    appearOnScroll.observe(element);
  });
});

//For hide navbar after klik menu
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Function to close navbar when clicking outside
    function closeNavbar() {
      navbarCollapse.classList.remove("show");
    }

  // Close navbar when clicking outside
    document.addEventListener("click", function(e) {
      if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
        closeNavbar();
      }
    });

  // Close navbar when a nav-link is clicked (for mobile view)
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", closeNavbar);
      });
});