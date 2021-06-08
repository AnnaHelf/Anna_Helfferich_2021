const contact = document.querySelector("#contact");
const contactTrigger = document.querySelector(".contact_russian");
const closeContact = document.querySelector("#close_contact");

contactTrigger.addEventListener("click", (e) => {
  console.log("click");
  contact.style.marginLeft = "0";
});

closeContact.addEventListener("click", (e) => {
  contact.style.marginLeft = "";
});
