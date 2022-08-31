const h1 = document.querySelector("div.Heelo h1");

console.dir(h1);

function handleTitleClick() {
    h1.style.color = "blue";
    h1.innerText = ("mouse is clicked!")
}
function handleMouseEnter() {
    h1.innerText = ("mouse is here!");
}
function handleMouseLeave() {
    h1.innerText = ("mouse is gone!");
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);





const h1 = document.querySelector("div.Heelo h1");

function handleTitleClick(){
    const currnetColor = h1.style.color;
    let newColor;
    if(h1.style.color === "blue") {
        newColor = "tomato";
    } else {
        h1.style.color = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);




const h1 = document.querySelector("div.Heelo h1");

function handleTitleClick(){
    if (h1.className === "active") {
    h1.className = "";
} else {
    h1.className = "active";
}
}

h1.addEventListener("click", handleTitleClick); 