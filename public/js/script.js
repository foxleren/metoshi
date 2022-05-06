export const Script = () => {


    function disableScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    function bindDisableScroll() {
        window.removeEventListener("scroll", disableScroll);
        window.removeEventListener("touchmove", disableScroll);
        window.removeEventListener("mousewheel", disableScroll);
    }

    function unbindDisableScroll() {
        window.addEventListener("scroll", disableScroll, {
            passive: false
        });
        window.addEventListener("touchmove", disableScroll, {
            passive: false
        });
        window.addEventListener("mousewheel", disableScroll, {
            passive: false
        });
    }

    function init() {
        $('.header_menu_trigger')
            .off()
            .on('click', function () {
                if ($('body').hasClass('show_menu')) {
                    bindDisableScroll();
                    $('body').removeClass('show_menu');
                } else {
                    unbindDisableScroll();
                    $('body').addClass('show_menu');
                }
            });

        $('.accordeon .item .ttl')
            .off()
            .on('click', function () {
                $(this).toggleClass('active');
                $(this).next('.item_in').slideToggle();
            });

        $('.show_popup')
            .off()
            .on('click', function () {
                unbindDisableScroll();
                $('.popup').fadeIn();
            });

        $('.popup_close')
            .off()
            .on('click', function () {
                bindDisableScroll();
                $('.popup').fadeOut();
            });
    }

    $(window)
        .on('load', function () {
            init();
        });
}
