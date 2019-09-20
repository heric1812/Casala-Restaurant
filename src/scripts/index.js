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

$(document).ready(function() {
  $('#input-search').on('focus', function() {
    if (!$('header .input-group').hasClass('active')) {
      $('header .input-group').addClass('active');
    }
  });
  $('#input-search').on('blur', function() {
    if ($('header .input-group').hasClass('active')) {
      $('header .input-group').removeClass('active');
    }
  });
});