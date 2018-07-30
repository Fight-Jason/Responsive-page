/**
 * Created by jason on 2018/6/25.
 */

function BackTop(ele) {
    ele = document.querySelector(ele);
    var timer = null;
    ele.onclick = function() {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    }
    window.onscroll = function() {
        var oTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (oTop > 200) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none'
        }
    }
}

BackTop(".back-to-top")