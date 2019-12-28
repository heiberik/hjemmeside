var artikler = []
var liste_artikler = document.getElementById("liste_artikler");

artikler.push("../html/artikler/artikkel1.html");
artikler.push("../html/artikler/artikkel2.html");
artikler.push("../html/artikler/artikkel3.html");
artikler.push("../html/artikler/artikkel4.html");

function visListe(){


    for (indeks = 0; indeks < artikler.length; indeks++) {

        var nyLi = document.createElement("li");
        var html = artikler[indeks];

        var content = document.createTextNode(html)

        nyLi.appendChild(content);

        liste_artikler.appendChild(nyLi);
    }
}


visListe();
