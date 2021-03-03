const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
$(".links a").on("click", function()
{
$(".navbar").removeClass("collapsed");
});
// $(".socials a").on("click", function() {
//   $(".navbar").removeClass("collapsed");
// });
window.addEventListener("scroll", e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});