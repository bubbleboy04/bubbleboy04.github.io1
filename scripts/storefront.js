loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
loadProduct();
$("#createNewProduct").click(function () {
    loadProduct();
})

let s = 10;
for (var i = 1; i < s-1; i++){
    var g = $(".shape").first().clone();
    g.css("--leftDist", ((i * (100 / s)) + "%"));
    g.appendTo("#animatedBackground");
}

function loadProduct() {
    var c = $(".productEntry").first().clone();
    c.appendTo(".storeContainer");

    var entries = $(".productEntry");
    for (var i = 0; i < entries.length; i++){
        entries[i].querySelector(".productText").textContent = "ProductID: " + (i+1);
    }

    $(".productEntry").hover(function () {
        $(this).addClass("productGrow");
        $(this).children("text").addClass("textAppear");
        $(this).children(".thumbnail").css("borderRadius", "0px");
        $(this).children(".thumbnail").css("borderWidth", "0px");
        $(this).css("cursor", "pointer");

    },
        function () {
            $(this).removeClass("productGrow");
            $(this).children("text").removeClass("textAppear");
            $(this).children(".thumbnail").css("borderRadius", "10px");
        $(this).children(".thumbnail").css("borderWidth", "3px");
    })
}


