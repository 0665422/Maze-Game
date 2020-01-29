// JavaScript source code

function toHtmlPoint(X, Y) {
    return "#y" + Y + " #x" + X
}

function createVirtualMap(X, Y) {
    var Grid = [];
    for (var i = 0; i < X; i++) {
        Grid.push([]);
        for (var f = 0; f < Y; f++) {
            Grid[i].push(["ground"]);
        };
    };
    //console.log(Grid);
    return Grid;
}

function createHtmlMap(X, Y) {
    //creating HTML layout
    $(".map-box").empty();
    for (var h = Y - 1; h >= 0; h--) {
        $(".map-box").append("<div class='row' id='y" + h + "'></div>");
        for (var w = 0; w < X; w++) {
            $(".map-box #y" + h).append("<div class='el' id='x" + w + "'></div>");
        };
    };
};



$(".create-button").click(function () {
    var xMap = $(".x-value").val();
    var yMap = $(".y-value").val();

    var map = createVirtualMap(xMap, yMap);
    createHtmlMap(xMap, yMap);
    applyCss(xMap, yMap, map);
})
