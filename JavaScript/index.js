
// tabel  Control
var li = document.querySelectorAll(".nav-link");
var tab_box = document.getElementsByClassName("tab-pane");
for (var i = 0; i < li.length; i++) {
    li[i].index = i;
    li[i].onclick = function() {
        for (var i = 0; i < li.length; i++) {
            li[i].className = "nav-link";
            tab_box[i].className = "tab-pane";
        }
        li[this.index].classList.add("active");
        tab_box[this.index].classList.add("show")
    }
}

// icon Num
function iconNum() {
    var i = 0;
    var oNumone = document.getElementsByClassName("counter");

    function change_one() {
        if (oNumone[0].innerHTML <= 11) {
            oNumone[0].innerHTML = ++i;
        }
    }
    setInterval(change_one, 100)
    change_one();

    function change_two() {
        if (oNumone[2].innerHTML < 125) {
            oNumone[2].innerHTML = ++i;
        }
    }
    setInterval(change_two, 100)
    change_two();
}

iconNum();



// silde Navbar
function slideToggleTrans(btnele, display) {
    var btnele = document.querySelector(btnele)
    btnele.addEventListener("click", function() {
        display = !display;
        var eleMore = document.querySelector(".slickbar-box");
        (eleMore.style.height = display ? (function() {
            var child = document.getElementsByClassName("slickbar-menu")[0]
            var height = 0;
            height = child.clientHeight;
            return height;
        })() + "px" : "0px");

    });

};

slideToggleTrans(".slickbar-nav");