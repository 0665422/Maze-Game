// JavaScript source code
$(".play button").click(function () {
    //$(".game").css("display", "block");
    $(".create-map").css("display", "none");
    //$(".menu").css("display", "inline-block");
    $(".create").css("display", "none");
    $(".choose-map").css("display", "block");
    $(".play").css("display", "none");
});

$(".choose-map button").click(function () {
    $(".game").css("display", "block");
    //$(".create-map").css("display", "none");
    $(".menu").css("display", "inline-block");
    //$(".create").css("display", "none");
    $(".choose-map").css("display", "none");x
    //$(".play").css("display", "none");
});

$(".create").click(function () {
    $(".game").css("display", "none");
    $(".create-map").css("display", "block");
    $(".menu").css("display", "inline-block");
    $(".create").css("display", "none");
    $(".play").css("display", "none");
});

$(".menu").click(function () {
    $(".game").css("display", "none");
    $(".create-map").css("display", "none");
    $(".menu").css("display", "none");
    $(".create").css("display", "inline-block");
    $(".play").css("display", "inline-block");
});