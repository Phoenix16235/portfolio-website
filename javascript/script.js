// Portfolio JS will go here
console.log("JS is connected");

const primarybutton = document.querySelector(".btn-primary");
const projectsSection = document.querySelector("#projects");

primarybutton.addEventListener("click", function (event) {
    event.preventDefault();
    projectsSection.scrollIntoView({ behavior: "smooth" });
});

const contactbutton = document.querySelector(".btn-secondary");
const contactsSection = document.querySelector("#contact");

contactbutton.addEventListener("click", function (event) {
    event.preventDefault();
    contactsSection.scrollIntoView({ behavior: "smooth"});
});