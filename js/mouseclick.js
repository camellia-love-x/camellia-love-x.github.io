var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("~可可爱爱~ʕ·ᴥ·ʔ", "~心想事成ʕథ౪థʔ", "~诗与远方(✪㉨✪)", "~财富自由ʕº̫͡ºʔ", "~世界和平ʕʽɞʼʔ", "~你是不是喜欢我呀ʕ≧㉨≦ʔ", "~不要点我啦ʕ•̮͡•ʔ","今天吃什么好呢ʕ•̮͡•ʔ","1+1=3?","嘟嘟嘟(*ノ・ω・）");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}