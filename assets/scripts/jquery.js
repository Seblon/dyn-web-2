$(document).ready(function() {
   $(".search-education__filter").on(
      "click",
      ".search-education__filter__toggle i",
      function() {
         $(this).toggleClass("open");
         $(".search-education__filter__wrapper").slideToggle("visible");
      }
   );
});
