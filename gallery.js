window.onload = initializeGallery;

function initializeGallery() {
    console.log("Page loaded. Initializing gallery...");
    let images = document.querySelectorAll(".preview");
    
    images.forEach((img) => {
        img.setAttribute("tabindex", "0"); // Make images focusable
        img.addEventListener("focus", function () { upDate(this); });
        img.addEventListener("blur", function () { unDo(); });
    });
}

function upDate(previewPic) {
    console.log("Hovered over / Focused on:", previewPic.alt);
    let display = document.getElementById("image");
    display.style.backgroundImage = `url('${previewPic.src}')`;
    display.innerHTML = previewPic.alt;
}

function unDo() {
    let display = document.getElementById("image");
    display.style.backgroundImage = "";
    display.innerHTML = "Hover over an image below to display here.";
}
