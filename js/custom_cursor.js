/* Custom Cursor */

let cursor = document.querySelector(".cursor");
const selectionDiv = document.querySelectorAll("#translate");
const nameAnna = document.querySelectorAll("#name");

/* CURSOR MOVE */
function moveCursor() {
  document.querySelector("body").addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + e.pageY + "px; left: " + e.pageX + "px"
    );
  });
}
window.onload = moveCursor();

function biggerCursor() {
  selectionDiv.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      /* console.log("mouse over selection"); */
      div.style.width = "30%";
      cursor.classList.add("bigger_cursor");
    });
  });
}
function smallerCursor() {
  selectionDiv.forEach((div) => {
    div.addEventListener("mouseleave", (e) => {
      /* console.log("mouse left selection"); */
      div.style.width = "";
      cursor.classList.remove("bigger_cursor");
    });
  });
}
biggerCursor();
smallerCursor();

/* NAME DISPLAY */
function displayAnna() {
  nameAnna.forEach((name) => {
    name.style.display = "";
  });
}
function displayNoneAnna() {
  nameAnna.forEach((name) => {
    name.style.display = "none";
  });
}

/* ABOUT ME TRANSLATION */
const about_russian = document.querySelector(".about_russian");
const about_english = document.querySelector(".about_english");
about_russian.addEventListener("mouseover", function () {
  console.log("hover over h1");
  about_russian.style.opacity = "0";
});

about_russian.addEventListener("mouseleave", function () {
  console.log("left about");
  about_russian.style.opacity = "";
});
