document.addEventListener('DOMContentLoaded', () => {

    anime({
        targets: '.section_one_div h2',
        translateY: [-400, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => {
            return 1000 + 100 * i;
        },
        opacity: [0, 1],
    })


    
    anime({
        targets: '.col-sm-10 .row .col-sm-4 .for_icon',
        translateY: [-400, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => {
            return 1000 + 100 * i;
        },
        opacity: [0, 1],
    })

    
    anime({
        targets: '.section_two_div h2',
        translateY: [-400, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => {
            return 1700 + 100 * i;
        },
        opacity: [0, 1],
    })

})