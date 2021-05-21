/* Custom Cursor */

let cursor = document.querySelector(".cursor");
const selectionDiv = document.querySelectorAll("#translate");
const russian_about = document.querySelector(".about_russian");
const english_about = document.querySelector(".about_english");
const russian_work = document.querySelector(".work_russian");
const english_work = document.querySelector(".work_english");
const russian_contact = document.querySelector(".contact_russian");
const english_contact = document.querySelector(".contact_english");
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

/* REFRESH ABOUT */
let timer;
function refreshAbout() {
  russian_about.style.opacity = "";
  english_about.style.opacity = "";
  document.querySelector(".anna_portrait").style.display = "";
  displayAnna();
}

function startRefreshAbout() {
  timer = setTimeout(function () {
    refreshAbout();
  }, 1000);
}

russian_about.addEventListener("mouseover", (e) => {
  e.target.style.opacity = "0";
  english_about.style.opacity = "1";
  document.querySelector(".anna_portrait").style.display = "block";
  displayNoneAnna();
});

english_about.addEventListener("mouseleave", (e) => {
  startRefreshAbout();
});

/* REFRESH WORK */
function refreshWork() {
  russian_work.style.opacity = "";
  english_work.style.opacity = "";
  document.querySelector(".anna_work").style.display = "";
  displayAnna();
}

function startRefreshWork() {
  timer = setTimeout(function () {
    refreshWork();
  }, 1000);
}

russian_work.addEventListener("mouseover", (e) => {
  e.target.style.opacity = "0";
  english_work.style.opacity = "1";
  document.querySelector(".anna_work").style.display = "block";
  displayNoneAnna();
});

english_work.addEventListener("mouseleave", (e) => {
  startRefreshWork();
});

/* REFRESH CONTACT */
function refreshContact() {
  russian_contact.style.opacity = "";
  english_contact.style.opacity = "";
  displayAnna();
}

function startRefreshContact() {
  timer = setTimeout(function () {
    refreshContact();
  }, 1000);
}

russian_contact.addEventListener("mouseover", (e) => {
  e.target.style.opacity = "0";
  english_contact.style.opacity = "1";
  document.querySelector(".anna_contact").style.display = "block";
  displayNoneAnna();
});

english_contact.addEventListener("mouseleave", (e) => {
  startRefreshContact();
});
