// script.ts
// Function to toggle visibility of an element
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        // Toggle the display property between 'none' and 'block'
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}
// Adding event listeners to buttons when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var toggleExperienceButton = document.getElementById('toggleExperienceButton');
    var toggleCertificationButton = document.getElementById('toggleCertificationButton');
    var toggleSkillsButton = document.getElementById('toggleSkillsButton');
    // Event listener for toggling Experience section
    if (toggleExperienceButton) {
        toggleExperienceButton.addEventListener('click', function () { return toggleVisibility('experienceSection'); });
    }
    // Event listener for toggling Certification section
    if (toggleCertificationButton) {
        toggleCertificationButton.addEventListener('click', function () { return toggleVisibility('certificationSection'); });
    }
    // Event listener for toggling Skills section
    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', function () { return toggleVisibility('skillsSection'); });
    }
});
