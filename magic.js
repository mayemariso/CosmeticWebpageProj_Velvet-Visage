var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform || "rotate(0deg)";
var rotateSum;

upBtn.onclick = function() {
    rotateSum = "rotate(" + (getCurrentRotation(circle) - 90) + "deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downBtn.onclick = function() {
    rotateSum = "rotate(" + (getCurrentRotation(circle) + 90) + "deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

function getCurrentRotation(el) {
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("transform");

    if (tr === "none") return 0;

    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angle;
}
