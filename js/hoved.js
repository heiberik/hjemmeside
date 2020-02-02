let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navNavn = document.getElementById('nav_navn');


// liste-ikon for mobil. navbar.
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});


// Metoder for navbar tekst for !mobil.
var tekst = document.getElementsByClassName('navbar_navn_tekst');
var div = document.getElementsByClassName('navbar_navn_div');
const tekster = document.querySelectorAll(".navbar_navn_tekst");

tekst[0].style.cursor = "pointer";
tekst[0].onclick = function(){
    window.location='/';
}
tekst[0].opacity = 1;

// sjekker om bruker er på mobil.
var mobil = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  mobil = true;
}


if (!mobil) {

    var skjermhoyde;
    var topp = true;
    var breakPoint = 200;

    window.onscroll = async function(){
        skjermhoyde = document.documentElement.scrollTop;
        console.log(skjermhoyde)

        if (skjermhoyde < breakPoint && !topp){
            topp = true;
            breakPoint = 250;
            byttTekst("Henrik Heiberg")
        } else if (skjermhoyde > breakPoint && topp){
            topp = false;
            breakPoint = 150;
            byttTekst("Side")
        }
    }
}


function byttTekst(t){
    tekst[0].style.opacity = "0";
    setTimeout(function(){
        endreTekst(t)
    }, 400);
}

function endreTekst(t){
    if (t == "Side"){
        if (tekster[0].id == 'tekst_cv'){
            tekster[0].innerHTML = "Om meg";
        }
        else if (tekster[0].id == 'tekst_artikler'){
            tekster[0].innerHTML = "Artikler";
        }
        else if (tekster[0].id == 'tekst_prosjekter'){
            tekster[0].innerHTML = "Prosjekter";
        } else {
            tekster[0].innerHTML = "Artikkel";
        }
        tekster[0].onclick = function(){
             window.scrollTo({ top: 0, behavior: 'smooth' });
        };

    } else {
        tekst[0].innerHTML = t;
        tekst[0].onclick = function(){
            window.location='/';
        }
    }
    setTimeout(function(){
        fadeIn()
    }, 200);
}

function fadeIn(){
    tekst[0].style.opacity = "1";
}
