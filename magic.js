document.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById("circle");
    var upBtn = document.getElementById("upBtn");
    var downBtn = document.getElementById("downBtn");

    if (!circle || !upBtn || !downBtn) {
        console.error("Missing required elements: #circle, #upBtn, or #downBtn");
        return;
    }

    upBtn.addEventListener("click", function() {
        rotateCircle(circle, -90);
    });

    downBtn.addEventListener("click", function() {
        rotateCircle(circle, 90);
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowUp") {
            rotateCircle(circle, -90);
        }
        if (e.key === "ArrowDown") {
            rotateCircle(circle, 90);
        }
    });
});

function rotateCircle(circle, step) {
    var rotateSum = "rotate(" + (getCurrentRotation(circle) + step) + "deg)";
    circle.style.transform = rotateSum;
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
