$(document).ready(function() {
   // SPARA DEN LÅNGA URL:EN I EN VARIABEL
   const quizUrl =
      "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz&limit=1";

   fetchQueries();

   // INITIERA RÄKNARE
   // let counter = 0;

   // counter = (counter + 1) % quizUrl.length;
   // e.preventDefault();
   // console.log(quizUrl[counter]);

   // KLICK PÅ #NEXT SKICKAR TILL NÄSTA FRÅGA
   // $(".main-content").on("click", "#next", function() {
   function fetchQueries() {
      $.get(quizUrl, function(quiz) {
         $.each(quiz, function(i, value) {
            $(".quiz-form").append(
               $(`
                  <p class="quiz-question">${value.question}</p>
                  <div class="border-container border-container1">
                  <input type="radio" id="radio-corr" name="radio" class="radio-response corr">
                  <label for="radio-corr" class="radio-response-label">${value.correct_answer}</label></div>
                  `)
            );
         });

         // LOOPA GENOM ARRAYEN INCORRECT_ANSWERS
         $.each(quiz, function(i, value) {
            // FÖRSÖK ATT FÖRHINDRA "UNDEFINED" DÅ FÄRRE SVARSALTERNATIV...
            if (value.incorrect_answers !== null) {
               $(".quiz-form").append(
                  $(`
                  <div class="border-container border-container2">
                  <input type="radio" id="radio-incorr1" name="radio" class="radio-response incorr">
                  <label for="radio-incorr1" class="radio-response-label">${value.incorrect_answers[0]}</label>
                  </div>
   
                  <div class="border-container border-container3">
                  <input type="radio" id="radio-incorr2" name="radio" class="radio-response incorr">
                  <label for="radio-incorr2" class="radio-response-label">${value.incorrect_answers[1]}</label>
                  </div>
   
                  <div class="border-container border-container4">
                  <input type="radio" id="radio-incorr3" name="radio" class="radio-response incorr">
                  <label for="radio-incorr3" class="radio-response-label">${value.incorrect_answers[2]}</label>
                  </div>
               `)
               );
            }
         });
      });
   }

   // USING EVENT DELEGATION FOR CLICK BECAUSE THE CONTENT IS DYNAMIC
   $(".quiz-container").on("click", ".radio-response", function() {
      if ($(".corr").is(":checked")) {
         $(this)
            .next()
            .css("color", "green");
      } else {
         $(".corr")
            .next()
            .css("color", "#272727");
      }
      if ($(".incorr").is(":checked")) {
         $(this)
            .next()
            .css("color", "red");
      }
   });
});
