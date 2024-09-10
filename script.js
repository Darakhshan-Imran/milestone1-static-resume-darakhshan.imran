var educationButton = document.getElementById("edubtn");
var educationText = document.getElementById("education");
educationButton.addEventListener("click", function () {
    if (educationText.style.display === 'none' || educationText.style.display === '') {
        educationText.style.display = 'block';
    }
    else {
        educationText.style.display = 'none';
    }
});
var skillsButton = document.getElementById("skillsbtn");
var skillsText = document.getElementById("skills");
skillsButton.addEventListener("click", function () {
    if (skillsText.style.display === 'none' || skillsText.style.display === '') {
        skillsText.style.display = 'block';
    }
    else {
        skillsText.style.display = 'none';
    }
});
var experienceButton = document.getElementById("expbtn");
var experienceText = document.getElementById("experience");
experienceButton.addEventListener("click", function () {
    if (experienceText.style.display === 'none' || experienceText.style.display === '') {
        experienceText.style.display = 'block';
    }
    else {
        experienceText.style.display = 'none';
    }
});
var projectButton = document.getElementById("projectbtn");
var projectText = document.getElementById("projects");
projectButton.addEventListener("click", function () {
    if (projectText.style.display === 'none' || projectText.style.display === '') {
        projectText.style.display = 'block';
    }
    else {
        projectText.style.display = 'none';
    }
});
