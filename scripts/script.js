document.getElementById("btnMenu").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle('open');
});

const btnShowProject = document.querySelectorAll(".btn-show-project");
const showProject = document.querySelectorAll(".show-project");

showProject[0].style.display = "flex";

//Exibe e esconde os projetos exibidos no painel
btnShowProject.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        openProjectsPanel();
        showProject.forEach((show) => (show.style.display = "none"));
        showProject[index].style.display = "flex";
    });
});

//Abre o painel de exibição de projetos
const openProjectsPanel = () => {
    document.getElementById("showProject").style.display = "flex";
};

//Fecha o painel de exibição de projetos
const closeProjectsPanel = () => {
    document.getElementById("showProject").style.display = "none";
};

const btnReplaceProject = document.querySelectorAll(".btn-replace-project");
const projectContent = document.querySelectorAll(".show-project-content");

projectContent[0].style.display = "flex";

btnReplaceProject.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        projectContent.forEach((content) => (content.style.display = "none"));
        projectContent[index].style.display = "flex";
    });
});

let infoIndex = 0;

const replaceInfoProject = (classImgTxt) => {
    const replaceImgTxt = document.querySelectorAll(classImgTxt);

    replaceImgTxt.forEach((replace) => (replace.style.display = "none"));

    if (infoIndex < 0) {
        infoIndex = replaceImgTxt.length - 1;
    } else if (infoIndex > replaceImgTxt.length - 1) {
        infoIndex = 0;
    }

    replaceImgTxt[infoIndex].style.display = "block";
};

const backInfo = (classImgTxt) => {
    infoIndex = infoIndex - 1;
    replaceInfoProject(classImgTxt);
};

const nextInfo = (classImgTxt) => {
    infoIndex = infoIndex + 1;
    replaceInfoProject(classImgTxt);
};

const replaceSlide = (slideClass, btnSlideClass) => {
    const slide = document.querySelectorAll(slideClass);
    const btnSlide = document.querySelectorAll(btnSlideClass);

    btnSlide.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            slide.forEach((slide) => (slide.style.display = "none"));
            slide[index].style.display = "flex";

            btnSlide.forEach((btn) => (btn.style.border = "none"));
            btn.style.border = "2px solid black";
        });
    });

    btnSlide[0].style.border = "2px solid black";
};

replaceSlide(".certification-slide", ".certification-btn");

replaceSlide(".diferencial-slide", ".diferencial-btn");
