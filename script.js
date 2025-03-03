let currentSection = 0;
const sections = document.querySelectorAll(".experience-section");

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? "flex" : "none";
    });
}

function nextExperience() {
    currentSection = (currentSection + 1) % sections.length;
    showSection(currentSection);
}

function prevExperience() {
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    showSection(currentSection);
}

// Show the first section by default
showSection(currentSection);
