// JavaScript source code

//DICTIONARIES

const map1 = {
    dimensions: [13, 13],
    startPoint: [1, 1],
    finishPoint: [[11, 7]],
    walls: [
        [1, 8], [2, 3], [2, 4], [2, 6], [2, 8], [2, 9], [2, 10], [3, 4], [3, 6], [4, 2], [4, 4], [4, 6], [5, 2], [6, 2], [7, 2], [8, 6]
        , [5, 6], [7, 6], [6, 4], [7, 4], [7, 3], [9, 4], [10, 4], [10, 5], [10, 6], [4, 8], [6, 8], [7, 8], [8, 8], [11, 4], [9, 2], [10, 2], [11, 2], [6, 6], [4, 7]
        , [4, 9], [4, 10], [5, 10], [6, 10], [7, 10], [9, 10], [10, 10], [10, 9], [10, 8], [11, 8], [9, 8], [6, 5], [3, 1]]
}

const map2 = {
    dimensions: [21, 21],
    startPoint: [10, 10],
    finishPoint: [[3, 17], [17, 3]],
    walls: [[8, 6], [4, 3], [3, 2], [2, 18], [4, 18], [4, 16], [2, 16], [18, 4], [16, 4], [16, 2], [18, 2], [9, 12], [9, 11], [8, 11], [9, 9], [8, 9], [9, 8], [11, 9]
        , [11, 8], [11, 9], [12, 9], [11, 11], [11, 12], [12, 11], [13, 9], [15, 9], [15, 8], [15, 7], [15, 6], [16, 5], [15, 4], [14, 4], [14, 3], [14, 2], [13, 2], [12, 2], [11, 2]
        , [13, 8], [13, 7], [13, 6], [12, 6], [12, 5], [12, 4], [11, 4], [10, 4], [9, 4], [9, 2], [8, 2], [7, 2], [8, 4], [7, 4], [11, 6], [10, 6], [5, 4], [5, 2], [6, 2], [5, 5], [5, 6]
        , [11, 1], [1, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 5], [3, 6], [7, 6], [7, 7], [19, 2], [18, 5], [18, 6], [18, 7], [17, 7], [17, 8], [17, 9], [15, 10], [15, 11], [15, 12]
        , [17, 12], [17, 10], [14, 13], [14, 14], [16, 15], [16, 14], [18, 14], [18, 15], [18, 16], [18, 18], [17, 18], [16, 18], [17, 14], [17, 13], [15, 18], [14, 18], [14, 19]
        , [19, 12], [19, 11], [19, 10], [19, 9], [13, 11], [12, 12], [12, 13], [12, 14], [12, 16], [13, 16], [14, 16], [14, 15], [3, 7], [3, 9], [2, 9], [2, 10], [2, 11], [3, 11]
        , [4, 11], [5, 11], [6, 11], [6, 12], [6, 13], [5, 13], [4, 13], [2, 13], [1, 13], [2, 14], [4, 14], [6, 10], [6, 9], [5, 9], [5, 8], [5, 7], [5, 15], [2, 15], [5, 18]
        , [6, 18], [8, 18], [8, 17], [8, 16], [8, 15], [6, 15], [6, 16], [5, 16], [6, 17], [8, 14], [4, 19], [6, 4], [7, 11], [10, 14], [10, 15], [10, 16], [11, 16], [12, 18]
        , [11, 18], [10, 18], [9, 18], [15, 15], [18, 10], [19, 16]]
}

const map3 = {
    dimensions: [47, 17],
    startPoint: [5, 8],
    finishPoint: [[42, 4], [42, 8], [42, 12]],
    walls: [[4, 9], [4, 10], [4, 11], [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [11, 11], [11, 10], [11, 9], [12, 9], [13, 9]
        , [14, 9], [15, 9], [16, 9], [17, 9], [17, 11], [18, 11], [19, 11], [20, 11], [21, 11], [22, 11], [23, 11], [23, 10], [23, 9], [23, 8], [23, 7], [23, 5]
        , [24, 5], [25, 5], [26, 5], [27, 5], [28, 5], [28, 4], [28, 3], [28, 2], [29, 2], [30, 2], [32, 2], [33, 2], [34, 2], [34, 3], [34, 4], [34, 5], [35, 5], [36, 5]
        , [37, 5], [37, 6], [39, 6], [2, 9], [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14]
        , [12, 14], [13, 14], [13, 13], [13, 12], [13, 11], [15, 11], [15, 12], [15, 13], [16, 13], [17, 13], [18, 13], [19, 13], [20, 13], [21, 13], [22, 13], [23, 13]
        , [24, 13], [25, 13], [25, 12], [25, 11], [25, 9], [25, 8], [25, 7], [26, 7], [27, 7], [28, 7], [29, 7], [30, 7], [30, 5], [30, 4], [31, 4], [32, 4]
        , [32, 5], [32, 7], [33, 7], [34, 7], [35, 7], [35, 8], [36, 8], [37, 8], [38, 8], [40, 6], [40, 7], [40, 8], [40, 9], [40, 10], [40, 11], [40, 12], [40, 13]
        , [40, 14], [41, 14], [42, 14], [43, 14], [44, 14], [44, 13], [38, 9], [38, 10], [38, 11], [38, 12], [38, 13], [38, 14], [44, 11], [44, 10], [44, 9], [44, 7], [44, 6], [44, 5]
        , [40, 5], [40, 4], [40, 3], [40, 2], [41, 2], [42, 2], [43, 2], [44, 2], [44, 3], [38, 3], [36, 2], [36, 1], [36, 1], [36, 3], [37, 3], [38, 2], [26, 1], [26, 2], [26, 3], [26, 4]
        , [21, 10], [21, 8], [21, 7], [21, 6], [21, 5], [21, 4], [21, 3], [22, 3], [23, 3], [24, 3], [23, 1], [24, 1], [6, 9], [6, 10], [7, 10], [8, 10], [9, 10], [9, 9], [9, 8]
        , [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7], [15, 7], [2, 7], [4, 7], [6, 7], [15, 14], [16, 14], [17, 14], [18, 14], [20, 15], [21, 15], [22, 15], [22, 14], [8, 8]
        , [6, 6], [4, 6], [2, 6], [7, 6], [7, 5], [8, 5], [9, 5], [10, 5], [10, 4], [10, 3], [10, 2], [11, 2], [12, 2], [13, 2], [12, 5], [13, 5], [14, 5], [15, 5], [16, 5], [16, 7]
        , [17, 7], [18, 7], [18, 5], [19, 9], [19, 8], [19, 7], [19, 6], [19, 5], [19, 4], [19, 3], [18, 3], [17, 3], [16, 3], [15, 3], [15, 2], [16, 2], [12, 4], [12, 3], [32, 6]
        , [30, 8], [30, 9], [30, 10], [29, 10], [28, 10], [27, 10], [27, 11], [27, 12], [27, 13], [27, 13], [27, 14], [28, 14], [29, 14], [30, 14], [31, 14], [42, 1], [32, 8], [32, 10]
        , [32, 11], [32, 12], [31, 12], [30, 12], [29, 12], [33, 13], [33, 14], [34, 14], [35, 14], [34, 10], [34, 11], [35, 10], [36, 10], [36, 11], [36, 11], [36, 12], [35, 9], [36, 14]
        , [36, 13], [36, 15], [23, 14], [24, 14], [25, 14], [27, 9], [29, 8], [2, 5], [2, 4], [2, 3], [2, 2], [3, 2], [4, 2], [5, 2], [5, 1], [4, 5], [5, 4], [5, 3], [6, 3], [7, 3]
        , [8, 3], [8, 2], [18, 1], [19, 1], [4, 4], [17, 10], [23, 6]]
}

//RUN

var x;
var y;

var playerStart;
var walls;

var playerLocation;
var board;

var gameWon = false;

$(document).keydown(function (event) {
    gameUpdate(event);
});

//FUNCTIONS

/*
function createVirtualBoard(x, y) {
    var Grid = [];
    for (var i = 0; i < x; i++) {
        Grid.push([]);
        for (var f = 0; f < y; f++) {
            Grid[i].push([0]);
        };
    };
    //console.log(Grid);
    return Grid;
}
*/


function showPlayerLocationPrev() {
    $(".location-prev").html("Previous: " + playerLocation);
};

function showPlayerLocationCurr() {
    $(".location-curr").html("Current: " + playerLocation);
};

function toHtmlPoint(x, y) {
    return "#y" + y + " #x" + x
}
/*
function createHtmlLayout(X, Y) {
    //creating HTML layout
    $(".app-box").empty();
    for (var h = Y - 1; h >= 0; h--) {
        $(".app-box").append("<div class='row' id='y" + h + "'></div>");
        for (var w = 0; w < X; w++) {
            $(".app-box #y" + h).append("<div class='el' id='x" + w + "'></div>");
        };
    };
    //applying CSS properties
    applyCss(X, Y, board);
};
*/

function createBorderWalls(X, Y, target) {
    //top & bottom borders
    for (var i = 0; i < X; i++) {
        target.push([i, 0]);
        target.push([i, Y - 1]);
    }
    //left & right borders
    for (var i = 0; i < Y; i++) {
        target.push([0, i]);
        target.push([X - 1, i]);
    }
}

//put functions here
function setGame(map) {
    gameWon = false;
    $(".win").css("display", "none");

    let mapCopy = JSON.parse(JSON.stringify(map));

    x = mapCopy.dimensions[0];
    y = mapCopy.dimensions[1];


    playerStart = mapCopy.startPoint;
    walls = mapCopy.walls;
    finish = mapCopy.finishPoint;

    //create borders
    //top & bottom borders
    for (var i = 0; i < x; i++) {
        walls.push([i, 0]);
        walls.push([i, y - 1]);
    }
    //left & right borders
    for (var i = 0; i < y; i++) {
        walls.push([0, i]);
        walls.push([x - 1, i]);
    }

    playerLocation = playerStart;

    //creating empty virtual map
    board = [];
    for (var i = 0; i < x; i++) {
        board.push([]);
        for (var f = 0; f < y; f++) {
            board[i].push([0]);
        };
    };

    //creating HTML layout
    $(".app-box").empty();
    for (var h = y - 1; h >= 0; h--) {
        $(".app-box").append("<div class='row' id='y" + h + "'></div>");
        for (var w = 0; w < x; w++) {
            $(".app-box #y" + h).append("<div class='el' id='x" + w + "'></div>");
        };
    };

    //define virtual map
    defineBoardElements(x, y, board);
    //applying CSS properties
    applyCss(x, y, board);
}



function defineBoardElements(x, y, target) {
    for (var i = 0; i < x; i++) {
        for (var f = 0; f < y; f++) {
            target[i][f] = "ground";
        };
    };

    for (var t = 0; t < walls.length; t++) {
        target[walls[t][0]][walls[t][1]] = "wall";
    }

    for (var t = 0; t < finish.length; t++) {
        target[finish[t][0]][finish[t][1]] = "finish";
    }

    target[playerLocation[0]][playerLocation[1]] = "player";
}

function applyCss(X, Y, source) {
    //updating CSS
    for (var h = Y - 1; h >= 0; h--) {
        for (var w = 0; w < X; w++) {
            var elType = "el " + source[w][h];
            $(toHtmlPoint(w, h)).attr("class", elType);
        };
    };
};

function canGo(X, Y, source) {
    if (X < 0 || X >= x) {
        return false;
    } else if (Y < 0 || Y >= y) {
        return false;
    } else if (source[X][Y] == "wall") {
        return false;
    } else {
        return true;
    }
}

function isWin() {
    for (var i = 0; i < finish.length; i++) {
        if (finish[i][0] == playerLocation[0] && finish[i][1] == playerLocation[1]) {
            return true;
        }
    }
    return false;
}


function gameUpdate(event) {
    //showPlayerLocationPrev();
    var haveMatched = true;
    if (!gameWon) {
        switch (event.which) {
            case 65:
            case 37: // left
                if (canGo(playerLocation[0] - 1, playerLocation[1], board)) {
                    playerLocation[0]--;
                }
                break;
            case 87:
            case 38: // up
                if (canGo(playerLocation[0], playerLocation[1] + 1, board)) {
                    playerLocation[1]++;
                }
                break;
            case 68:
            case 39: // right
                if (canGo(playerLocation[0] + 1, playerLocation[1], board)) {
                    playerLocation[0]++;
                }
                break;
            case 83:
            case 40: // down
                if (canGo(playerLocation[0], playerLocation[1] - 1, board)) {
                    playerLocation[1]--;
                }
                break;


            //for deveolper ONLY
            case 32: //space
                $(".chosen-points").append(", [" + playerLocation + "]");
                break;
            case 8: // backspace
                $(".chosen-points").empty();
                break;


            default:
                haveMatched = false;
                return; // exit this handler for other keys
        }
    }
    if (haveMatched) {
        event.preventDefault(); // prevent the default action (scroll / move caret)

        //showPlayerLocationCurr();

        defineBoardElements(x, y, board);
        applyCss(x, y, board);

        if (isWin()) {
            gameWon = true;
            $(".win").css("display", "block");
            $(".win").css("left", ($(window).width() / 2) - ($(".win").width() / 2) + "px");
            $(".win img").css("width", $(".win h3").width() - 400 + "px");
        }
    }
}

