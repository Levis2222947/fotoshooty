(function () {
  const navItems = [
    ["Portretshoot", "portret.html"],
    ["Familieshoot", "famillie.html"],
    ["Zakelijke shoot", "zakelijk.html"],
    ["Vriendenshoot", "vriendenshoot.html"],
    ["Baby & kids", "baby.html"],
    ["Zwangerschap", "zwangerschap.html"],
    ["Love shoot", "loveshoot.html"],
    ["Model fotoshoot", "model.html"],
    ["Creatieve shoot", "creativeshoot.html"],
    ["Glamour in Amsterdam", "glamour.html"]
  ];

  function isActive(href) {
    const page = window.location.pathname.split("/").pop() || "index.html";
    return href.split("#")[0] === page;
  }

  function buildNav() {
    const priceHref = document.getElementById("prijzen") ? "#prijzen" : "index.html#prijzen";
    const nav = document.createElement("nav");
    nav.className = "fs-site-nav";
    nav.setAttribute("aria-label", "Hoofdnavigatie");

    nav.innerHTML = `
      <div class="fs-site-nav-main">
        <a class="fs-logo" href="index.html">
          <img src="https://fotoshoot.nl/wp-content/uploads/2017/09/logo.png" alt="Fotoshoot.nl">
          <span>Utrecht</span>
        </a>
        <button class="fs-menu-toggle" type="button" aria-expanded="false">
          <span>Menu</span>
          <span class="fs-menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
        </button>
      </div>
      <div class="fs-nav-links">
        <a href="index.html" class="${isActive("index.html") ? "is-active" : ""}">Home</a>
        <div class="fs-dropdown">
          <button class="fs-dropdown-toggle" type="button" aria-expanded="false">
            <span>Fotoshoots</span><span class="fs-chevron" aria-hidden="true"></span>
          </button>
          <div class="fs-dropdown-panel">
            ${navItems.map(([label, href]) => `<a href="${href}" class="${isActive(href) ? "is-active" : ""}">${label}</a>`).join("")}
          </div>
        </div>
        <a href="cadeaubon.html" class="${isActive("cadeaubon.html") ? "is-active" : ""}">Cadeaubon</a>
        <a href="${priceHref}">Prijzen</a>
        <a href="contact.html" class="${isActive("contact.html") ? "is-active" : ""}">Contact</a>
        <a href="veelgestelde-vragen.html" class="${isActive("veelgestelde-vragen.html") ? "is-active" : ""}">Veel gestelde vragen</a>
        <a class="fs-book-button" href="https://fotoshoot.nl/boeken/">Boek</a>
      </div>
    `;

    return nav;
  }

  function init() {
    if (document.querySelector(".fs-site-nav")) return;

    document.querySelectorAll("nav.nav").forEach((oldNav) => {
      oldNav.hidden = true;
      oldNav.setAttribute("aria-hidden", "true");
    });

    const topbar = document.querySelector(".topbar");
    const nav = buildNav();
    if (topbar) {
      topbar.insertAdjacentElement("afterend", nav);
    } else {
      document.body.insertAdjacentElement("afterbegin", nav);
    }

    const menuToggle = nav.querySelector(".fs-menu-toggle");
    const dropdown = nav.querySelector(".fs-dropdown");
    const dropdownToggle = nav.querySelector(".fs-dropdown-toggle");

    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    dropdownToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = dropdown.classList.toggle("is-open");
      dropdownToggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) {
        dropdown.classList.remove("is-open");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        dropdown.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        dropdownToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
