var delay = 1;

function rushToBuy() {
    var timeOut2 = setTimeout(function () {
        if (!document.getElementsByClassName('modal_scroller').length) {
            clearTimeout(timeOut2);
            console.log('rushToBuy');
            document.getElementsByClassName('buynow')[0].click();
            modalClick();
        } else {
            rushToBuy();
        }
    }, delay);
}

function modalClick() {
    var timeOut = setTimeout(function () {
        if (document.getElementsByClassName('modal_scroller').length) {
            clearTimeout(timeOut);
            document.getElementsByClassName('modal_msgbox_button')[0].click();
            rushToBuy();
        } else {
            modalClick();
        }
    }, delay)
}

document.getElementsByClassName('buynow')[0].click();
modalClick();