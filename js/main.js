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

  $("#terminos").click(function () {
    $("#btn-terminos").toggleClass("disabled");
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

$(".my-rating-historial").starRating({
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

$(".my-rating-carry").starRating({
  initialRating: 0,
  totalStars: 5,
  starSize: 40,
  readOnly: false,
  emptyColor: '#3ae6c6',
  activeColor: '#2A095F',
  strokeWidth: 40,
  strokeColor: '#2A095F',
  useGradient: false,
  hoverColor: '#2A095F',
  ratedColor:	'#2A095F',
  useFullStars: true
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

