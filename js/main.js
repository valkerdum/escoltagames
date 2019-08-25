$(document).ready(function () {
  $('.owl-carousel').owlCarousel(
    {
      items:1,
      lazyLoad: true,
      responsive : {
        0: {
          nav: false
        },
        576: {
          nav: true
        }
      }
    }
  );

  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});


$(".my-rating").starRating({
  initialRating: 4,
  totalStars: 5,
  starSize: 25,
  readOnly: true,
  emptyColor: '#242424',
  activeColor: 'white',
  strokeWidth: 20,
  strokeColor: 'white',
  useGradient: false
});

$(".rating-resenas-usuario").starRating({
  initialRating: 4,
  totalStars: 5,
  starSize: 20,
  readOnly: true,
  emptyColor: '#242424',
  activeColor: 'white',
  strokeWidth: 20,
  strokeColor: 'white',
  useGradient: false
});


  $(function () {
    $('#datetimepicker13').datetimepicker({
      inline: true,
      sideBySide: false,
      format: 'L',
      locale: 'es'
    });
  });



document.querySelector('.mis-chats-conversacion').fakeScroll();
document.querySelector('.mis-chats-listado').fakeScroll(
  {
    track: "smooth"
  }
);

for (let elm of document.querySelectorAll('.fakeScroll__content'))
  elm.setAttribute('contenteditable', true)

