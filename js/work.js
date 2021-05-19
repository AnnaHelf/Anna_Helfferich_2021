/* $(function () {
  $("h6").click(function () {
    console.log("click");
    $(this).parent().siblings().slideToggle();
  });
}); */

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
