(function() {

    'use strict';

    let $nav = $('.navigation__menu');
    let $navMenu = $('.navigation__menu-list-item');
    let $navSearchContainer = $('.navigation__search-container');
    let $navFadeScreen = $('.navigation__fade-screen');

    $('.navigation__menu-list-item--search a, .navigation__fade-screen, .navigation__search-close').on('click', function(e) {

        $navSearchContainer.toggleClass('active');

        setTimeout(function() {
            $navSearchContainer.children().find('input').focus();
        }, 1300);

        $navFadeScreen.toggleClass('navigation__fade-screen--visible');
        $navMenu.removeClass('is-closed');
        $navMenu.toggleClass('is-hidden');

        e.preventDefault();
    });

    $('.navigation__fade-screen, .navigation__search-close').on('click', function(e) {
        $navMenu.toggleClass('is-closed');
        e.preventDefault();
    });

    $('.navigation__mobile-trigger').on('click', function(e) {
        $nav.slideToggle();
    });
}());
