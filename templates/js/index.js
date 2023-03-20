var mylogo = document.querySelector(".logo");
var myinfo = document.querySelector(".info");

mylogo.addEventListener("mouseover", showPopup);
mylogo.addEventListener("mouseout", hidePopup);

function showPopup(evt) {
    var iconPos = mylogo.getBoundingClientRect();
    myinfo.style.display = "block";
}

function hidePopup(evt) {
    myinfo.style.display = "none";
}