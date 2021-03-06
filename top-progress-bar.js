$.fn.topProgressBar = function(options) {
    var opts = $.extend({}, {
        bgColor: "blue",
        height: "2px"
    }, options);
    var bar = getTopProgressBar(opts);
    $(bar).prependTo(document.body);
    $(window).on("scroll", function() {
        var p = getScrollPercent();
        $(bar).css("width", p);
    });
}
function getTopProgressBar(opts) {
    var bar = document.createElement("div")
    bar.style.position = "fixed";
    bar.style.top = "0px";
    bar.style.backgroundColor = opts.bgColor;
    bar.style.height = opts.height;
    return bar;
}
function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return parseInt((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100) + "%";
}