const aboutMe = document.querySelector("#aboutMe");
const divAboutMe = document.querySelector(".selection_about");
const close = document.querySelector("#close");

divAboutMe.addEventListener("click", (e) => {
  console.log("click");
  aboutMe.style.marginLeft = "0";
});

close.addEventListener("click", (e) => {
  aboutMe.style.marginLeft = "";
});
