$('.case-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1200:{
                items:2
            }
        }
    });

$('.team-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    responsive:{
        0:{ items:1 },
        768:{ items:2 },
        1200:{ items:4 }
    }
});