const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 5%";
    nav.style.background = "#090909";
    nav.style.flexDirection = "column";
    nav.style.borderBottom = "1px solid #292929";
  }
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800) nav.style.display = "";
  });
});
