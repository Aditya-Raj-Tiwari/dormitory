$(document).ready(function () {
    $('.owl-carousel.header_slider').owlCarousel({
        navigation: true,
        navigationText: ["<img src='/resources/left'>", "<img src='mynextimage.png'>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        autoHeight: false,
        autoHeightClass: 'owl-main-height'
    });
});