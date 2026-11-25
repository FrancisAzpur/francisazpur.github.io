document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const desktopNavLinks = document.querySelectorAll(".nav-link");
  const allSectionLinks = [...desktopNavLinks, ...mobileNavLinks];
  const sections = document.querySelectorAll("main section[id]");

  // Menú móvil accesible
  const setMobileMenuState = (open) => {
    if (!mobileToggle || !mobileMenu) return;
    mobileToggle.setAttribute("aria-expanded", String(open));
    mobileToggle.setAttribute(
      "aria-label",
      open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
    mobileMenu.classList.toggle("hidden", !open);
    if (mobileMenuIcon) {
      mobileMenuIcon.textContent = open ? "close" : "menu";
    }
  };

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";
      setMobileMenuState(!isOpen);
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => setMobileMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMobileMenuState(false);
      }
    });

    document.addEventListener("click", (event) => {
      const isOpen = mobileToggle.getAttribute("aria-expanded") === "true";
      if (!isOpen) return;
      if (!mobileMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        setMobileMenuState(false);
      }
    });
  }

  // Resaltado activo según sección visible (Scroll-spy)
  const updateActiveNav = (activeId) => {
    allSectionLinks.forEach((link) => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      const isMatch = targetId === activeId;
      link.classList.toggle("is-active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if (sections.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          updateActiveNav(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // Filtro interactivo de proyectos
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const projectCountLabel = document.getElementById("project-count");

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.dataset.filter || "all";

        filterButtons.forEach((btn) => {
          const active = btn === button;
          btn.classList.toggle("is-active", active);
          btn.setAttribute("aria-pressed", String(active));
        });

        let visibleCount = 0;
        projectCards.forEach((card) => {
          const categories = (card.dataset.category || "").split(" ");
          const matches = filterValue === "all" || categories.includes(filterValue);
          card.classList.toggle("is-hidden", !matches);
          if (matches) visibleCount += 1;
        });

        if (projectCountLabel) {
          const formatted = String(visibleCount).padStart(2, "0");
          projectCountLabel.textContent = `ENTIDADES VISIBLES: ${formatted}`;
        }
      });
    });
  }

  // Copiar correo institucional al portapapeles
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyEmailStatus = document.getElementById("copy-email-status");
  const emailAddress = "u21229536@utp.edu.pe";

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailAddress);
        if (copyEmailStatus) {
          copyEmailStatus.textContent = "Correo copiado al portapapeles";
          copyEmailStatus.classList.remove("hidden");
          setTimeout(() => {
            copyEmailStatus.classList.add("hidden");
          }, 2600);
        }
      } catch {
        window.location.href = `mailto:${emailAddress}`;
      }
    });
  }
});
