// Portfolio JS will go here
console.log("JS is connected");

const primarybutton = document.querySelector(".btn-primary");
const projectsSection = document.querySelector("#projects");

primarybutton.addEventListener("click", function(event) {
    event.preventDefault();
    projectsSection.scrollIntoView({ behavior: "smooth" });
});