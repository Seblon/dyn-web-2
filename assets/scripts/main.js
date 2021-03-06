$(document).ready(function() {
   // SPARA DEN LÅNGA URL:EN I EN VARIABEL
   const coursesUrl =
      "http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses";

   $.getJSON(coursesUrl, function(courses) {
      // LOOPA IGENOM ARRAYEN
      $.each(courses, function(i, value) {
         let teachers = value.teachers;

         let randomNbr = 1 + Math.floor(Math.random() * 100);

         let img = `https://source.unsplash.com/collection/9581292/${randomNbr}`;

         // APPEND HTML FÖR VARJE KURS
         $(".courses__inner-container").append(
            // MED "TEMPLATE LITERALS" SLIPPER JAG KONKATENERA + ' ' + 'osv...' +
            $(`
            <article class="course__article">
            <div class="course__article__img-wrapper">
            <img src="${img}" class="img--center-cover" alt="Sample image">               
            </div>
            <div class="course__article__desc__wrapper">
               <h2 class="course__article__title"> ${value.courseName} </h2>
               <ul class="course__article__list no-bullets">
                  <li class="course__article__list-item main__item">School: </li>
                  <li class="course__article__list-item secondary__item">${
                     value.school
                  }</li>
               </ul>
               <ul class="course__article__list no-bullets">
                  <li class="course__article__list-item main__item">Starts: <span
                        class="course__article__list-item secondary__item">Week ${
                           value.startWeek
                        }</span></li>
                  <li class="course__article__list-item main__item">Ends: <span class="course__article__list-item secondary__item">Week ${
                     value.endWeek
                  }</span>
                  </li>
               </ul>
               <ul class="course__article__list no-bullets">
                  <li class="course__article__list-item main__item">Credit: </li>
                  <li class="course__article__list-item secondary__item">${
                     value.credit
                  }hp</li>
               </ul>
               <ul class="course__article__list teacher-list no-bullets">
                  <li class="course__article__list-item main__item">Teacher(s): </li>
                  <li class="course__article__list-item secondary__item">${value.teachers
                     .sort()
                     .join(", ")}</li>
                  </ul>
               </ul>
               <a href="#" class="btn btn--red btn--rounded absolute__pos">Find out more</a>
            </div>
            <p class="course__desc__courseId main__item">Course id: <span class="secondary__item">${
               value.courseId
            }</span></p>
         </article>
         `)
         );
      });
   });

   // LOGIN VALIDATION
   let emailInput = document.getElementById("email-input");
   let pwInput = document.getElementById("pw-input");
   let submitBtn = document.getElementById("login-submit");

   $(submitBtn).click(function(e) {
      checkCred();
      e.preventDefault();
   });

   let studentsUrl =
      "http://webbred2.utb.hb.se/~fewe/api/api.php?data=students";

   function checkCred() {
      // HÄMTA API VIA AJAX
      $.get(studentsUrl, function(students) {
         $.each(students, function(i, data) {
            if (
               // OM ANGIVEN DATA ÖVERENSSTÄMMER MED DATAN FRÅN API
               data.email == emailInput.value &&
               data.login.password == pwInput.value
            ) {
               // SKICKA VIDARE TILL FÖLJANDE URL OCH SKRIV UT I CONSOLE
               console.log("Logged in!");
               document.location.href = "courses.html";

               return false;
            } else {
               // ANNARS VISA FELMEDDELANDE SAMT SKRIV UT TILL CONSOLE
               $(".login-error-message")
                  .removeClass("invisible")
                  .html(
                     "Ooops, it looks like you made a typo there. Please, try again!"
                  );
               console.log("Try again!");
            }
         });
      });
   }

   // SHOW / HIDE SEARCH FILTER HOMEPAGE
   $(".search-education__filter__toggle i").click(function() {
      $(this).toggleClass("open");
      $(".search-education__filter__wrapper").slideToggle(".visible");
   });
});
