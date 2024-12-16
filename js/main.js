const swiper = new Swiper(".info__slider", {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
});


const botSwiper = new Swiper(".slider__bot", {
    navigation: {
        slidesPerView: "auto",

        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal'),
modalCloseBtn = document.querySelector('[data-close]'),
modalInput = document.querySelector('[data-input]'),
modalInputs = document.querySelectorAll('.modal__input');


const modalTimerId = setTimeout(openModal, 3000);



function openModal() {
modal.classList.add('transform-show');
document.body.style.overflow = 'hidden';
clearTimeout(modalTimerId);
}
modalTrigger.forEach(btn => {
btn.addEventListener('click', openModal);
});

function closeModal() {
modal.classList.remove('transform-show');
document.body.style.overflow = '';

}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
if (e.target === modal) {
    closeModal();

}
});

const modalForm = document.querySelector('.modal__form');

modalForm.addEventListener('submit', (e) => {
e.preventDefault();
modalInputs.forEach(input => {
    input.value = ''
});
closeModal();

});

document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modal.classList.contains('transform-show')) {
    closeModal();
}
});


function showModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
}
}

window.addEventListener('scroll', showModalByScroll);

modalInput.addEventListener('keydown', function (event) {
if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 27 || event.keyCode == 37 || event.keyCode == 39) {

    return;
} else {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 || event.keyCode !== 189 )) {
        event.preventDefault();
    }
}
});

modalInput.addEventListener('input', (e) => {

if (e.target.value.length <= 2) {
    e.target.value = "+7";
}
if (!(e.target.value.startsWith('+7'))) {
    e.target.value = "+7"
}
if (e.target.value == '+' || e.target.value == '!' || e.target.value == '@' || e.target.value == '#' || e.target.value == '$' || e.target.value == '%' || e.target.value == '&' || e.target.value == '*' || e.target.value == '(' || e.target.value == ')' || e.target.value == '-' || e.target.value == '_' || e.target.value == '=' || e.target.value == '|') {
    e.target.value = "+7"
}

});

// anchors

const anchorServices = document.querySelector('[data-anchor-services]');

const anchorMortage = document.querySelector('[data-anchor-mortage]');

const anchorAbout = document.querySelector('[data-anchor-about]');

const anchorContacts = document.querySelector('[data-anchor-contacts]');

const AnchorStart = document.querySelector('[data-start]');


anchorServices.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top:941
    });
});
anchorMortage.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top:1844
    });
})
anchorAbout.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top:3136
    });
})
anchorContacts.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top:4313
    });
})

AnchorStart.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top:0
    })
})


//941
//1844
//3136
//4313

