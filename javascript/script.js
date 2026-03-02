console.log("SCRIPT LOADED ✅");

const navLinks = document.querySelectorAll(".menu a");

function clearActive() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

function setActiveLink(link) {
  clearActive();
  link.classList.add("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = link.getAttribute("href"); // "#home", "#about", etc.
    const section = document.querySelector(target);

    // highlight stays on what you clicked
    setActiveLink(link);

    // smooth scroll
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
        }, 350);
      
    }
  });
});

// Optional: set active on page load based on URL hash (e.g. /#contact)
if (window.location.hash) {
  const initial = document.querySelector(`.menu a[href="${window.location.hash}"]`);
  if (initial) setActiveLink(initial);
} else {
  // default to Home on first load
  const home = document.querySelector('.menu a[href="#home"]');
  if (home) setActiveLink(home);
}
// Year studying timer
function fullYearsSince(dateString) {
  const start = new Date(dateString);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();

  // If today's date is before the anniversary this year, subtract 1
  const hasHadAnniversaryThisYear = 
    (today.getMonth() > start.getMonth()) ||
    (today.getMonth() === start.getMonth() && today.getDate() >= start.getDate());

    if (!hasHadAnniversaryThisYear) years -=1;

    return Math.max(0, years);
}

const yearsEl = document.getElementById("years-study");
if (yearsEl) {
  const startDate = yearsEl.getAttribute("data-start");
  yearsEl.textContent = String(fullYearsSince(startDate));
}