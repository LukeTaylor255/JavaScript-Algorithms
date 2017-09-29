process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

var strMap = {
    0: "midnight",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty"
}

function minuteToString(m) {
    if(m == 30) {
        return "half";
    }
    if(m > 30) {
        m = 60 - m;
    }
    if(m == 15) {
        return "quarter";
    }
    if(m == 1) {
        return "one minute";
    }
    if(m <= 20) {
        return strMap[m] + " minutes";
    }
    return strMap[m-m%10] + " " + strMap[m-20] + " minutes";
}

function hourToString(h) {
    return strMap[h];
}

function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());
    if(m >= 60) {
        h += Math.floor(m/60);
        m = m % 60;
    }
    if(m == 0) {
        console.log(hourToString(h%12) + " o' clock");
        return;
    }
    if(m <= 30) {
        console.log(minuteToString(m) + " past " + hourToString(h%12));
    } else {
        console.log(minuteToString(m) + " to " + hourToString((h+1)%12));
    }
}
