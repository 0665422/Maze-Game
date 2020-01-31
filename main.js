// JavaScript source code

//DICTIONARIES

const map1 = {
    dimensions: [21, 21],
    startPoint: [1, 10],
    finishPoint: [[19, 10]],
    walls: [[8, 6], [4, 3], [3, 2], [2, 3], [1, 3]]
}

const map2 = {
    dimensions: [31, 11],
    startPoint: [1, 7],
    finishPoint: [[19, 7]],
    walls: [[8, 6], [4, 3], [3, 2]]
}

const map3 = {
    dimensions: [10, 10],
    startPoint: [5, 5],
    finishPoint: [[8, 8]],
    walls: [[8, 6], [4, 3], [3, 2]]
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
        }
    }
    

});

//FUNCTIONS

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

function showPlayerLocationPrev() {
    $(".location-prev").html("Previous: " + playerLocation);
};

function showPlayerLocationCurr() {
    $(".location-curr").html("Current: " + playerLocation);
};

function toHtmlPoint(x, y) {
    return "#y" + y + " #x" + x
}

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

function setGame(map) {
    gameWon = false;
    $(".win").css("display", "none");

    let mapCopy = JSON.parse(JSON.stringify(map));

    x = mapCopy.dimensions[0];
    y = mapCopy.dimensions[1];

    playerStart = mapCopy.startPoint;
    walls = mapCopy.walls;
    finish = mapCopy.finishPoint;

    createBorderWalls(x, y, walls);

    playerLocation = playerStart;
    board = createVirtualBoard(x, y);

    defineBoardElements(x, y, board);
    createHtmlLayout(x, y);
}

function isWin() {
    for (var i = 0; i < finish.length; i++) {
        if (finish[i][0] == playerLocation[0] && finish[i][1] == playerLocation[1]) {
            return true;
        } else {
            return false;
        }
    }
}
