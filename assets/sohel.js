$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scrollY >= 30) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("lg:bg-purple-800 lg:shadow-md");
    }
    else   {
        //clearHeader, not clearheader - caps H
        $("header").removeClass("lg:bg-purple-800 lg:shadow-md ");
    }
}); //missing );