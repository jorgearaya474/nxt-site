/**
 * Load title mask animation
 */
const loadTitleMask = () => {
  const mask = document.querySelector("#title-mask");
  const introSection = document.querySelector("#section_intro");

  // check the nodes
  if (introSection && mask) {
    // mouse event variables
    let mouseX, mouseY, trayX, trayY;

    // Add mouse movement event listener
    introSection.addEventListener("mousemove", (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
      trayX = (4 * mouseX) / 570 + 40;
      trayY = (4 * mouseY) / 570 + 50;
      mask.style.backgroundPosition = trayX + "%" + trayY + "%";
    });
  }
};

/**
 * Headder scroll animation
 */
const headerStickyAnimate = () => {
  const header = document.querySelector("#site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 140) {
        header.classList.add("border-b-4", "border-emerald-600");
      } else {
        header.classList.remove("border-b-4", "border-emerald-600");
      }
    });
  }
};

export { loadTitleMask, headerStickyAnimate };
