// Initialize the slider
$(document).ready(function () {
   $('.slider').bxSlider({
      pager: false,
   });
});



$(function () {

   $('#open').on('click', function () {
      $('.overlay').css('display', 'block');
      $('.modal-wrapper').animate({
         'top': '50%'
      }, 300);
      $('body').css('overflow-y', 'hidden');
   });



   $('#close').on('click', function () {
      $('.modal-wrapper').animate({
         'top': '-50%'
      }, 300, function () {
         $('.overlay').css('display', 'none');
      });
      $('body').css('overflow-y', 'scroll');
      // функция выполняется после  анимации	
   });

});