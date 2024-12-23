// GET DOM ITEMS

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-items");

// set initial state of the menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

// Select all links
const links = document.querySelectorAll('.link');

// Add event listeners for hover effects
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
    link.style.transform = 'scale(1.1)'; // Enlarge link slightly
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)'; // Reset scale
  });
});

