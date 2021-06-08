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
  document.querySelector(".anna_portrait").style.display = "block";
  displayNoneAnna();
});

about_russian.addEventListener("mouseleave", function () {
  console.log("left about");
  about_russian.style.opacity = "";
  document.querySelector(".anna_portrait").style.display = "";
  displayAnna();
});

/* MY WORK TRANSLATION */
const work_russian = document.querySelector(".work_russian");
const work_english = document.querySelector(".work_english");

work_russian.addEventListener("mouseover", function () {
  console.log("hover over h1");
  work_russian.style.opacity = "0";
  document.querySelector(".anna_work").style.display = "block";
  displayNoneAnna();
});

work_russian.addEventListener("mouseleave", function () {
  console.log("left about");
  work_russian.style.opacity = "";
  document.querySelector(".anna_work").style.display = "";
  displayAnna();
});

/* CONTACT */
const contact_russian = document.querySelector(".contact_russian");
const contact_english = document.querySelector(".contact_english");

contact_russian.addEventListener("mouseover", function () {
  console.log("hover over h1");
  contact_russian.style.opacity = "0";
  document.querySelector(".anna_contact").style.display = "block";
  displayNoneAnna();
});

contact_russian.addEventListener("mouseleave", function () {
  console.log("left about");
  contact_russian.style.opacity = "";
  document.querySelector(".anna_contact").style.display = "";
  displayAnna();
});
