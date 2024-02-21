function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

let typed = new Typed(".auto-type", {
  strings: ["Web Developer", "UI / UX Designer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
