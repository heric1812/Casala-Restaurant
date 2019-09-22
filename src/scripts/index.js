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

  $('.input-number input').on('blur', (e) => {
    if (isNaN($(e.target).val())) {
      $(e.target).val(1);
    }
  });

  $('.input-number-btn').on('click', (e) => {
    const element = $(e.target);
    const input = element.parents('.input-number').find('input');
    var value = parseInt(input.val());
    if (!value) {
      input.val(1);
      return;
    }
    if (element.hasClass('input-number-btn__minus')) {
      input.val(value <= 1 ? 1 : --value);
    } else if (element.hasClass('input-number-btn__plus')) {
      input.val(++value);
    }
  });
});