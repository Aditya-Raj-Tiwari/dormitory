$(document).ready(function () {
    $('.owl-carousel.header_slider').owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        autoHeight: false,
        autoHeightClass: 'owl-main-height'
    });
});