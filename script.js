let images = new Array();

function preloadImages() {
    for (i = 0; i < preloadImages.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}

preloadImages("Imgs/Grilled-chicken.jpg", "Imgs/Grilled-meats.jpg", "Imgs/Seasoned-meat.jpg", "Imgs/Steak.jpg");



$(function () {
    $(document).scroll(function () {
        let $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
})



