let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navNavn = document.getElementById('nav_navn');

// liste-ikon for mobil. navbar.
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});


// Metoder for navbar tekst for !mobil. bytter tekst og bytter link til tekst
// basert på scrolling.
var div = $('.navbar_navn_div');
div.css("cursor", "pointer");
div.click(function() {
    window.location = "/";
});

$(function() {

    var boks = $('.navbar_navn_boks');
    var tekst = $('.navbar_navn_tekst');

    var prosjekter = $('#tekst_prosjekter');
    var forside = $('#tekst_forside');
    var cv = $('#tekst_cv');
    var artikler = $('#tekst_artikler');

    var topp = true;
    var breakpoint = 100;
    var mobil = window.matchMedia('(max-width: 767px)').matches;

	$(window).scroll(function scrollingFunc(){
		if ($(window).scrollTop() <= breakpoint && !topp && !mobil){
            topp = true;
            tekst.fadeOut(function() {
              tekst.text("Henrik Heiberg")
          }).fadeIn(300);

          div.off();
          div.click(function() {
              window.location = "/";
          });

      } else if ($(window).scrollTop() > breakpoint && topp && !mobil) {
            topp = false;
            tekst.fadeOut(function() {
                tekst.text("Artikler")
                prosjekter.text("Prosjekter")
                forside.text("Forside")
                cv.text("Om meg")
            }).fadeIn(300);

            div.off();
            div.click(function() {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            });

        }
	});
});
