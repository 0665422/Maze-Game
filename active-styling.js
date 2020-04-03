// JavaScript source code

$("document").ready(function () {
    activeStyling();
    $(window).resize(function () {
        activeStyling();
    });
});

function activeStyling() {
    $(".win").css("left", ($(window).width() / 2) - ($(".win").width() / 2) + "px");
    $(".win img").css("width", $(".win h3").width() - 400 + "px");
}