const label = document.getElementById("menu-open");
const nav = document.querySelector('#nav');
const links = document.querySelectorAll('#nav a')

label.addEventListener("click", () => {
    nav.classList.toggle("visible");
})

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove('visible')
    })
});

document.getElementById("menubtn").addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
});