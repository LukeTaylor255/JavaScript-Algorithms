//By Luke Taylor
//JavaScript solution of ICPC Problem A from North America qualifier 2015

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var charToIntMap = {
    '0':0,
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    'a':10,
    'b':11,
    'c':12,
    'd':13,
    'e':14,
    'f':15,
    'g':16,
    'h':17,
    'i':18,
    'j':19,
    'k':20,
    'l':21,
    'm':22,
    'n':23,
    'o':24,
    'p':25,
    'q':26,
    'r':27,
    's':28,
    't':29,
    'u':30,
    'v':31,
    'w':32,
    'x':33,
    'y':34,
    'z':35
}

var intToCharMap = { };

for(var key in charToIntMap) {
    intToCharMap[charToIntMap[key]] = key;
}
intToCharMap[36] = '0';

function convertToDecimal(string, base) {
    var b = 1, sum = 0;
    for(var k = string.length-1;k>=0;k--) {
        sum += charToIntMap[string[k]] * b;
        b *= base;
    }
    return sum;
}

function maxDigit(string) {
    var max = 0;
    for(var k=0;k<string.length;k++) {
        curDigit = charToIntMap[string[k]];
        if(curDigit > max) {
            max = curDigit;
        }
    }
    return max;
}

rl.on('line', function(input) {
    //console.log(JSON.stringify(intToCharMap)); //debugging info
    
    // split so "1 + 2 = 3" -> [1,+,2,=,3]
    var toks = input.split(' ');
    if(toks.length < 5) { //Ignore beginning line
        return;
    }
    //console.log(JSON.stringify(toks)); //debugging info
    //Find highest digit in any of the values
    var max = Math.max(maxDigit(toks[0]), maxDigit(toks[2]), maxDigit(toks[4]));
    //console.log("Max of toks = " + max); //debugging info
    if(max == 1) { //Allow to check unary cases
        max--;
    }
    var validBases = [];
    for(var k=max+1;k<=36;k++) {
        var a = convertToDecimal(toks[0], k);
        var b = convertToDecimal(toks[2], k);
        var c = convertToDecimal(toks[4], k);
        //console.log("k = "+k+", a = " + a, ", b = " + b + ", c = " + c); //debugging info
        var isValid;
        isValid = toks[1] == '+' && a + b == c;
        isValid = isValid || toks[1] == '-' && a - b == c;
        isValid = isValid || toks[1] == '*' && a * b == c;
        isValid = isValid || toks[1] == '/' && a / b == c;
        if(isValid) {
            if(validBases.length > 0) {
                for(var j=k;j<=36;j++) {
                    validBases.push(j);
                }
                break;
            } else {
                validBases.push(k);
            }
        }
    }
    if(validBases.length == 0) {
        console.log("invalid");
    } else {
        console.log(validBases.map(function(x) { return intToCharMap[x]; }).join(''));
    }
    // 11 + 11 = 1111
    // 11 + 11 = 110
    // 11 + 11 = 22
    // 5 + 5 = 10
    // 5 + 5 = a
    // toks[0] is always the first number
    // toks[1] is always the operand
    // toks[2] is always the second number
    // toks[3] is always the equals sign
    // toks[4] is always the result
});
