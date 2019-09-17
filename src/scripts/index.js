import '../styles/index.scss';
const $ = require('jquery');
import 'bootstrap';
// import 'slick-carousel';

window.jQuery = $;
window.$ = $;

$(window).on('load', function () {
  $('body').css('overflow', 'visible');
  $('#page-loader').fadeOut(500);
});

// $('.carousel-tours').slick({
//   autoplay: true,
//   centerMode: true,
//   centerPadding: '20px',
//   slidesToShow: 5,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '20px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 2
//       }
//     }
//   ]
// });

// $('.carousel-blog').slick({
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '20px',
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
