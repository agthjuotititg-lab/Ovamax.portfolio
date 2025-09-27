document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll(".gallery figure");
  const lightbox = document.getElementById("lightbox");
  const lbImg = lightbox.querySelector(".lb-image");
  const lbCaption = lightbox.querySelector(".lb-caption");
  const lbClose = lightbox.querySelector(".lb-close");

  figures.forEach(fig => {
    const img = fig.querySelector("img");
    img.addEventListener("click", () => {
      lbImg.src = img.dataset.full || img.src;
      lbCaption.textContent = fig.querySelector("figcaption")?.textContent || "";
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  lbClose.addEventListener("click", () => { lightbox.setAttribute("aria-hidden", "true"); });
  lightbox.addEventListener("click", e => { if(e.target === lightbox) lightbox.setAttribute("aria-hidden", "true"); });

  document.getElementById("year").textContent = new Date().getFullYear();

  const fadeElems = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeElems.forEach(el => observer.observe(el));
});