var a,  k = 1;
num = 0, nom = 0, nym = 0, pos = 0, seria = " серия", chast = " часть", server = " сервер";
um = window.um || {};
(um = {
    create: function(e) {
        document.getElementById(e).innerHTML = '<div id="wrapper" onselectstart="return false" oncontextmenu="return false;"><div id="player"></div><div id="panel"></div></div>';
        k = 1, num = 0, nom = 0, nym = 0;
        var c = document.createElement("div"),
            d = document.getElementById("panel");
        if (d != null) {
            c.id = "playlist";
            d.appendChild(c);
            d.innerHTML += '<div onmousedown="um.move(3)" onmouseover="um.move(1)" onmouseout="um.move(0)" id="r"></div><div onmousedown="um.move(4)" onmouseover="um.move(2)" onmouseout="um.move(0)" id="l"></div>'
        }
    },
    uplay: function(h, f, d) {
        var g, m = 1,
            e, c, l;
        if (d) {
            if (d == 1) {
                d = chast
            } else {
                if (d == 2) {
                    d = server
                }
            }
        } else {
            d = seria
        }
        try {
            num = num + 1;
            l = document.createElement("button");
            l.setAttribute("title", num + d);
            l.setAttribute("id", "id-" + num);
            l.setAttribute("class", "filmButton");
            l.setAttribute("type", h);
            l.setAttribute("name", f);
            if (d == chast || d == server) {
                nym = nym + 1;
                nom = nom - nym + num;
                if (k == 1) {
                    k = k - 1;
                    nom = nom + 1
                }
                l.innerHTML = nym + d
            } else {
                nom = nom + 1;
                l.innerHTML = nom + d
            }
            document.getElementById("playlist").appendChild(l)
        } finally {
            e = document.getElementById("id-" + num);
            e.setAttribute("onclick", "um.player('id-" + num + "');return false;");
            e.addEventListener("click", function() {
                if (document.querySelector("filmButton")) {
                    c = document.querySelector("filmButton");
                    for (g = 0; g < c.length; ++g) {
                        c[g].setAttribute("class", "")
                    }
                }
                e.setAttribute("class", "active")
            }, false)
        }
        setTimeout("um.move(2);um.player('id-1');document.querySelector('filmButton')[0].setAttribute('class','active');", 70)
    },
    player: function(e) {
        var c = document.createElement("embed"),
            d = document.createElement("iframe");
        type = document.getElementById(e).getAttribute("type");
        if (em = document.getElementsByTagName("embed")[0]) {
            em.parentNode.removeChild(em)
        } else {
            if (ob = document.getElementsByTagName("iframe")[0]) {
                ob.parentNode.removeChild(ob)
            }
        }

        if (type == "5") {
            d.src = document.getElementById(e).name;
            d.setAttribute("scrolling", "no");
            d.setAttribute("frameborder", "none");
            d.setAttribute("allowfullscreen", "true");
            d.height = "100%";
            d.width = "100%";
            document.getElementById("player").appendChild(d)
        }
    }
})(um);
