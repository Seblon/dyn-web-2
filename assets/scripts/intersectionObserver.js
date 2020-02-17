const nav = document.querySelector(".main-navigation");
const heroLeaving = document.querySelector(".hero");
const socialTop = document.querySelector(".header__social-top__contact");
const logo = document.querySelector(".header__logo");
const btmThird = document.getElementById("bottom-third");

const heroOptions = {
   threshold: 0,
   rootMargin: "-70px" // Tar antingen "px" eller "%"
};

const heroLeavingObserver = new IntersectionObserver(function(
   entries,
   heroLeavingObserver
) {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         nav.classList.add("nav-is-top");
         socialTop.style.color = "#272727";
         logo.style.width = "40px";
         logo.style.left = "calc(50% - 690px)";
      } else {
         nav.classList.remove("nav-is-top");
         socialTop.style.color = "#ffffff";
         logo.style.width = "80px";
         logo.style.left = "calc(50% - 740px)";
      }
   });
},
heroOptions);

heroLeavingObserver.observe(heroLeaving);
