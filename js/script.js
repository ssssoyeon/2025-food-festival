AOS.init({
    duration: 1000
});

const zoneList = document.querySelectorAll('.zone_list li');
const numList = document.querySelectorAll('.location_wrap li');
const headerBtn = document.querySelector('.header_btn')


const fixedTopBtn = document.querySelector('.fixedTop')
let i = 0

init(i)

function init(q) {
    zoneList[q].classList.add('Act')
    numList[q].classList.add('On')
}

function reset() {
    for (let i = 0; i < zoneList.length; i++) {
        zoneList[i].classList.remove('Act')
        numList[i].classList.remove('On')
    }
}

zoneList.forEach(function (zone, p) {
    zone.addEventListener('click', function (e) {
        e.preventDefault()
        console.log(p);
        reset();
        init(p)
    })
})


const header = document.querySelector('header')


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // console.log(scrollTop);


    if (scrollTop > 100) {
        header.classList.add('fixed')
    } else {

        header.classList.remove('fixed')
    }

})


headerBtn.addEventListener('click', (e) => {
    e.preventDefault()

    header.classList.toggle('menuOpen')
})

fixedTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})



const foodswipe = new Swiper(".card-slider", {
    navigation: {
        prevEl: ".arr_wrap .prev",
        nextEl: ".arr_wrap .next",
     
        
       
    },
  
    
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
             spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
 
    
    loop:true,
    autoplay:{delay:1000},
    speed: 2000,
    
   
});

const snsslider = new Swiper(".sns-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    centeredSlides: true,
    autoplay: { delay: 1000 },
    speed: 2000,


    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 5,
        }
    },
});