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

document.querySelector("body").addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px"
  );
});

selectionDiv.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    /* console.log("mouse over selection"); */
    div.style.width = "30%";
    cursor.classList.add("bigger_cursor");
  });
});
selectionDiv.forEach((div) => {
  div.addEventListener("mouseleave", (e) => {
    /* console.log("mouse left selection"); */
    div.style.width = "";
    cursor.classList.remove("bigger_cursor");
  });
});

/* about */

russian_about.addEventListener("mouseover", (e) => {
  e.target.style.opacity = "0";
  english_about.style.opacity = "1";
  nameAnna.forEach((name) => {
    name.style.display = "none";
  });
});
english_about.addEventListener("mouseleave", (e) => {
  english_about.style.opacity = "";
  russian_about.style.opacity = "";
  nameAnna.forEach((name) => {
    name.style.display = "";
  });
});

/* work */
russian_work.addEventListener("mouseover", (e) => {
  e.target.style.opacity = "0";
  english_work.style.opacity = "1";
  nameAnna.forEach((name) => {
    name.style.display = "none";
  });
});
english_work.addEventListener("mouseleave", (e) => {
  english_work.style.opacity = "";
  russian_work.style.opacity = "";
  nameAnna.forEach((name) => {
    name.style.display = "";
  });
});

/* contact */
russian_contact.addEventListener("mouseover", (e) => {
  e.target.style.opacity = "0";
  english_contact.style.opacity = "1";
  nameAnna.forEach((name) => {
    name.style.display = "none";
  });
});
english_contact.addEventListener("mouseleave", (e) => {
  english_contact.style.opacity = "";
  russian_contact.style.opacity = "";
  nameAnna.forEach((name) => {
    name.style.display = "";
  });
});

/* ANNA PORTRAIT */

russian_about.addEventListener("mouseover", (e) => {
  document.querySelector(".anna_portrait").style.display = "block";
});
english_about.addEventListener("mouseleave", (e) => {
  document.querySelector(".anna_portrait").style.display = "";
});

/* ANNA WORK */
russian_work.addEventListener("mouseover", (e) => {
  document.querySelector(".anna_work").style.display = "block";
});
english_work.addEventListener("mouseleave", (e) => {
  document.querySelector(".anna_work").style.display = "";
});

/* ANNA CONTACT */
russian_contact.addEventListener("mouseover", (e) => {
  document.querySelector(".anna_contact").style.display = "block";
});
english_contact.addEventListener("mouseleave", (e) => {
  document.querySelector(".anna_contact").style.display = "";
});
