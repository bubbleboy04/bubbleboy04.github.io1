var g = document.getElementById("shape");

var shapes = document.querySelectorAll(".shape");

for (var i = 0; i < shapes.length; i++){
    // @ts-ignore
    shapes[i].style.setProperty("--leftDist", (i * (100 / shapes.length)) + "%");
    shapes[i].style.setProperty("--wid", (30 + getRandomInt(40)) + "px");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function firstLoad(e) {
    var dur = 10 + getRandomInt(10);
    var delay = getRandomInt(3);
    var endTop = 50 + getRandomInt(30);
    let pe = e.parentElement;
    assignMotion(pe, dur, delay, endTop);
}
function assignMotion(elem, dur, delay, endTop) {
    
    elem.style.setProperty("--duration", (dur + "s"));
    elem.style.setProperty("--delay", (delay + "s"));
    elem.style.setProperty("--endTop", ($("body").height() + "px"));

    var grabT = (parseInt(getComputedStyle(elem).getPropertyValue("--duration")) + parseInt(getComputedStyle(elem).getPropertyValue("--delay"))) * 1000;
    var calT = (dur + delay) * 1000;

    
    elem.classList.add("animate");
    setTimeout(function () {
        elem.classList.remove("animate");

        var dur = 10 + getRandomInt(10);
        var delay = getRandomInt(3);
        
        var endTop = 50 + getRandomInt(30);
        
        
        assignMotion(elem, dur, delay, endTop);

        
    }, (dur + delay) * 1000);
}

