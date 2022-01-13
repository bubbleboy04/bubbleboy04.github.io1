$("#storeButton").click(function () {
    $(".siteMap").css("opacity", "0");
    $(".center").css("opacity", "0");
    $(".center").css("display", "flex");
    setTimeout(function () {
        $(".siteMap").css("display", "none");
        
        $(".center").css("opacity", "1");
        
        $(".heading").css("opacity", "1");
        
        
    }, 500)
    
})

$(".home").click(function () {
    
    $(".siteMap").css("display", "flex");
    $(".siteMap").css("opacity", "0");
    $(".center").css("opacity", "0");
    $(".heading").css("opacity", "0");
    setTimeout(function () {
        $(".center").css("display", "none");
        $(".siteMap").css("opacity", "1");
    }, 800)
})