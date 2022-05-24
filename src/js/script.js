let $ = window.$;

export const disableScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

export const bindDisableScroll = () => {
    window.removeEventListener("scroll", disableScroll);
    window.removeEventListener("touchmove", disableScroll);
    window.removeEventListener("mousewheel", disableScroll);
}

export const unbindDisableScroll = () => {
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

export const showPopup = () => {
    unbindDisableScroll();
    $('.popup').fadeIn();
}

export const closePopup = () => {
    bindDisableScroll();
    $('.popup').fadeOut();
}

export const toggleHeaderMenu = () => {

    if ($('body').hasClass('show_menu')) {
        bindDisableScroll();
        $('body').removeClass('show_menu');
    } else {
        unbindDisableScroll();
        $('body').addClass('show_menu');
    }
}
// export const toggleFaqItem = (e) => {
//     e.target.classList.toggle('active');
//     $(e.target).next('.item_in').slideToggle();
// }











