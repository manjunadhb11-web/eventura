function hideSection(id) {
    let sec = document.getElementById(id);
    if (sec) sec.style.display = "none";
}

function showSection(id) {
    let sec = document.getElementById(id);
    if (sec) sec.style.display = "block";
}

function openWedding() {
    hideSection("home");
    hideSection("decorations");
    hideSection("about");
    hideSection("contact");

    showSection("sectionDecorations");

    window.location.hash = "#sectionDecorations";
}

function openbirthday() {
    hideSection("home");
    hideSection("decorations");
    hideSection("about");
    hideSection("contact");
    hideSection("reception")


    showSection("birthday");

    window.location.hash = "#sectionDecorations";
}


function openreception() {
    hideSection("home");
    hideSection("decorations");
    hideSection("about");
    hideSection("contact");

    showSection("reception");

    window.location.hash = "#sectionDecorations";
}

function openrecepti() {
    hideSection("home");
    hideSection("decorations");
    hideSection("about");
    hideSection("contact");

    showSection("reception");

    window.location.hash = "#sectionDecorations";
}



function goBack() {
    hideSection("sectionDecorations");
    hideSection("birthday")
    hideSection("reception")

    showSection("home");
    showSection("decorations");
    showSection("about");
    showSection("contact");

    window.location.hash = "#home";
}


function home() {
    hideSection("sectionDecorations");
    hideSection("birthday")
    hideSection("reception")

    showSection("home");
    showSection("decorations");
    showSection("about");
    showSection("contact");

    window.location.hash = "#home";
}

function decorations() {
    hideSection("sectionDecorations");
    hideSection("birthday")
    hideSection("reception")

    showSection("home");
    showSection("decorations");
    showSection("about");
    showSection("contact");

    window.location.hash = "#decorations";
}


function about() {
    hideSection("sectionDecorations");
    hideSection("birthday")
    hideSection("reception")

    showSection("home");
    showSection("decorations");
    showSection("about");
    showSection("contact");

    window.location.hash = "#about";
}

function contact() {
    hideSection("sectionDecorations");
    hideSection("birthday")
    hideSection("reception")

    showSection("home");
    showSection("decorations");
    showSection("about");
    showSection("contact");

    window.location.hash = "#contact";
}