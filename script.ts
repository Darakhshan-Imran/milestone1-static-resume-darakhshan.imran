

const educationButton = document.getElementById("edubtn") as HTMLButtonElement;
const educationText = document.getElementById("education") as HTMLElement;

educationButton.addEventListener("click", ()=>{
    if (educationText.style.display ==='none' || educationText.style.display ===''){
        educationText.style.display ='block';
    } else {
        educationText.style.display='none';
    }
});

const skillsButton = document.getElementById("skillsbtn") as HTMLButtonElement;
const skillsText = document.getElementById("skills") as HTMLElement;

skillsButton.addEventListener("click", ()=>{
    if (skillsText.style.display ==='none' || skillsText.style.display ===''){
        skillsText.style.display ='block';
    } else {
        skillsText.style.display='none';
    }
});

const experienceButton = document.getElementById("expbtn") as HTMLButtonElement;
const experienceText = document.getElementById("experience") as HTMLElement;

experienceButton.addEventListener("click", ()=>{
    if (experienceText.style.display ==='none' || experienceText.style.display ===''){
        experienceText.style.display ='block';
    } else {
        experienceText.style.display='none';
    }
});

const projectButton = document.getElementById("projectbtn") as HTMLButtonElement;
const projectText = document.getElementById("projects") as HTMLElement;

projectButton.addEventListener("click", ()=>{
    if (projectText.style.display ==='none' || projectText.style.display ===''){
        projectText.style.display ='block';
    } else {
        projectText.style.display='none';
    }
});

