// function toggleText(btn){
//     let fullText = btn.previousElementSibling;

//     if(fullText.style.display === "none" || fullText.style.display === ""){
//         fullText.style.display = "block";
//         btn.innerText = "Read Less";
//     } else {
//         fullText.style.display = "none";
//         btn.innerText = "Read More";
//     }
// }
$(document).ready(function () {
    $('#multiple-items').slick({
        dots: false,
        infinite: true,
        arrows: false, 
        
        slidesToShow: 5,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,

        cssEase: 'linear',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    }); 
}); 
$('#digitizing-items').slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('#brand-items').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
        autoplaySpeed: 0,
        speed: 9000,
        pauseOnHover: false,
        pauseOnFocus: false,

        cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
