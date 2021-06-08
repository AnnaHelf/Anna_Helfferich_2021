const aboutMe = document.querySelector("#aboutMe");
const aboutTrigger = document.querySelector(".about_russian");
const close = document.querySelector("#close");

aboutTrigger.addEventListener("click", (e) => {
  console.log("click");
  aboutMe.style.marginLeft = "0";
});

close.addEventListener("click", (e) => {
  aboutMe.style.marginLeft = "";
});
