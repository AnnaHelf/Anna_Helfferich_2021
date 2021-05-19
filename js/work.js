const closeWork = document.querySelector("#close_work");
const divWork = document.querySelector("#myWork");
const workTrigger = document
  .querySelector(".selection_work")

  .addEventListener("click", (e) => {
    console.log("click");
    divWork.style.marginTop = "0";
  });

closeWork.addEventListener("click", (e) => {
  divWork.style.marginTop = "";
});

const titlePhoto = document.querySelector("#photo");
const titleSimple = document.querySelector("#simple");
const titleJenny = document.querySelector("#jenny");

const videoPhoto = document.querySelector("#photo_vid");
const videoSimple = document.querySelector("#simple_vid");
const videoJenny = document.querySelector("#jenny_vid");

titlePhoto.addEventListener("mouseover", (e) => {
  videoPhoto.style.opacity = "1";
});
titleSimple.addEventListener("mouseover", (e) => {
  videoSimple.style.opacity = "1";
});
titleJenny.addEventListener("mouseover", (e) => {
  videoJenny.style.opacity = "1";
});
titlePhoto.addEventListener("mouseleave", (e) => {
  videoPhoto.style.opacity = "";
});
titleSimple.addEventListener("mouseleave", (e) => {
  videoSimple.style.opacity = "";
});
titleJenny.addEventListener("mouseleave", (e) => {
  videoJenny.style.opacity = "";
});
