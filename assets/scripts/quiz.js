$(document).ready(function() {
   // SPARA DEN LÅNGA URL:EN I EN VARIABEL
   const quizUrl = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz";

   fetchQueries();

   function fetchQueries() {
      $.getJSON(quizUrl, function(data) {
         $.each(data, function(index, item) {
            let allQuestions = item.question; // RETRIEVE ALL QUESTIONS
            let corrAnswer = item.correct_answer; // RETRIEVE ALL CORRECT ANSWERS

            $.each(data, function(index, item) {
               item.incorrect_answers;
               return false;
            });

            $(".quiz-form").append(
               $(`
                  <p class="quiz-question">${allQuestions}</p>
                  <div class="border-container border-container1">
                  <input type="radio" id="radio-corr" name="radio" class="radio-response corr">
                  <label for="radio-corr" class="radio-response-label">${corrAnswer}</label>
                  </div>
                  <div class="border-container border-container2">
                  <input type="radio" id="radio-incorr1" name="radio" class="radio-response incorr">
                  <label for="radio-incorr1" class="radio-response-label">${item.incorrect_answers[0]}</label>
                  </div>

                  <div class="border-container border-container3">
                  <input type="radio" id="radio-incorr2" name="radio" class="radio-response incorr">
                  <label for="radio-incorr2" class="radio-response-label">${item.incorrect_answers[1]}</label>
                  </div>

                  <div class="border-container border-container4">
                  <input type="radio" id="radio-incorr3" name="radio" class="radio-response incorr">
                  <label for="radio-incorr3" class="radio-response-label">${item.incorrect_answers[2]}</label>
                  </div>
               `)
            );
         });
      });
   }

   // USING EVENT DELEGATION FOR CLICK BECAUSE THE CONTENT ISN'T AVAILABLE IN DOM
   $(".quiz-container").on("click", ".radio-response", function() {
      if ($(".corr").is(":checked")) {
         $(this)
            .next()
            .css("color", "green");
      } else {
         $(".corr")
            .next()
            .css("color", "");
      }
      if ($(".incorr").is(":checked")) {
         $(this)
            .next()
            .css("color", "red");
      } else {
         $(".incorr")
            .next()
            .css("color", "");
      }
   });
});
