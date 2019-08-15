var a, k = 1;
num = 0, nom = 0, nym = 0, pos = 0, seria1 = " серия", chast1 = " часть", server1 = " сервер";
ums = window.ums || {};
(ums = {
    create: function (e) {
        document.getElementById(e).innerHTML = '<div id="wrapper1" onselectstart="return false" oncontextmenu="return false;"><div id="player1"></div><div id="panel1"></div></div>';
        k = 1, num = 0, nom = 0, nym = 0;
        var c = document.createElement("div"),
            d = document.getElementById("panel1");
        if (d != null) {
            c.id = "playlist1";
            d.appendChild(c);
            d.innerHTML += '<div onmousedown="ums.move(3)" onmouseover="ums.move(1)" onmouseout="ums.move(0)" id="r"></div><div onmousedown="ums.move(4)" onmouseover="ums.move(2)" onmouseout="ums.move(0)" id="l"></div>'
        }
    },
    uplay1: function (h, f, d) {
        var g, m = 1,
            e, c, l;
        if (d) {
            if (d == 1) {
                d = chast1
            } else {
                if (d == 2) {
                    d = server1
                }
            }
        } else {
            d = seria1
        }
        try {
            num = num + 1;
            l = document.createElement("button");
            l.setAttribute("title", num + d);
            l.setAttribute("id", "id-" + num);
            l.setAttribute("type", h);
            l.setAttribute("class",  "filmButton")
            l.setAttribute("name", f);
            if (d == chast1 || d == server1) {
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
            document.getElementById("playlist1").appendChild(l)
        } finally {
            e = document.getElementById("id-" + num);
            e.setAttribute("onclick", "ums.player1('id-" + num + "');return false;");
            e.addEventListener("click", function () {
                if (document.querySelector(".filmButton")) {
                    c = document.querySelector(".filmButton");
                    for (g = 0; g < c.length; ++g) {
                        c[g].setAttribute("class", "")
                    }
                }
                e.setAttribute("class", "active")
            }, false)
        }
        setTimeout("ums.move(2);ums.player1('id-1');document.getElementsByTagName('button')[0].setAttribute('class','active');", 1700)
    },
    player1: function (e) {
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
        if (type == "0" || type == "") {
            c.height = "100%";
            c.width = "100%";
            c.setAttribute("allowScriptAccess", "always");
            c.setAttribute("allowfullscreen", "true");
            c.src = "http://www.youtube.com/v/" + document.getElementById(e).name;
            c.type = "application/x-shockwave-flash";
            document.getElementById("player1").appendChild(c).style.background = "#000"
        }
        if (type == "1") {
            d.src = document.getElementById(e).name;
            d.setAttribute("scrolling", "no");
            d.setAttribute("frameborder", "none");
            d.height = "100%";
            d.width = "100%";
            document.getElementById("player1").appendChild(d)
        }
    }
})(ums);