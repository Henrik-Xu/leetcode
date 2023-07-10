/**
 * Robot Return to Origin
 */
let judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    for (let ch of [...moves]) {
        if (ch == 'U') y++;
        else if (ch == 'D') y--;
        else if (ch == 'R') x++;
        else if (ch == 'L') x--;
    }
    return x == 0 && y == 0;
};