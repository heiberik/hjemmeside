let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

let navNavn = document.getElementById('nav_navn');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});



$(function() {

    var boks = $('.navbar_navn_boks');
    var div = $('.navbar_navn_div');
    var tekst = $('.navbar_navn_tekst');
    var klar = true;
    var breakpoint = 50;
    var mobil = window.matchMedia('(max-width: 767px)').matches;
    console.log(mobil);

	$(window).scroll(function scrollingFunc(){

		if ($(window).scrollTop() <= breakpoint && klar && !mobil){
            klar = false;
            breakpoint = 150;
            boks.show(600, function(){
                div.fadeIn(400, function(){
                    tekst.fadeIn(400, function(){
                        klar = true;
                    });
                });
            })

        } else if ($(window).scrollTop() <= breakpoint && !klar && !mobil) {
            breakpoint = 150;
            klar = false;
            boks.show(0, function(){
                div.fadeIn(0, function(){
                    tekst.fadeIn(0, function(){
                        klar = true;
                    });
                });
            })

        } else if ($(window).scrollTop() > breakpoint && klar && !mobil) {
            breakpoint = 25;
            klar = false;
            tekst.fadeOut(100, function(){
                div.fadeOut(100, function(){
                    boks.hide(600, function(){
                        klar = true;
                    });
                });
            });

        } else if ($(window).scrollTop() > breakpoint && !klar && !mobil) {
            breakpoint = 25;
            klar = false;
            tekst.fadeOut(0, function(){
                div.fadeOut(0, function(){
                    boks.hide(0, function(){
                        klar = true;
                    });
                });
            });
		}
	});
});
