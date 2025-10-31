  const sections = document.querySelectorAll("article");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150; // margem para compensar header fixo
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("ativo");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("ativo");
      }
    });
  });