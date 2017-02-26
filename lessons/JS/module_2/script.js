<<<<<<< HEAD
var getRandom = function(min, max){
    return parseInt(Math.random() * (min + max) - min);
};

var SDP = {
    randString: function(rendArr){
        var randStr = '';
        for(var i = 0; i < 8; i++){
            randStr += rendArr[getRandom(0, 35)];
        }
        return randStr;
    }
};

function renderArr(){
    var arr = [];
    for(var i = 97; i <=122; i++){
        arr.push(String.fromCharCode(i));
    }
    for(var i = 48; i <=57; i++){
        arr.push(String.fromCharCode(i));
    }

    return arr;
}

console.log(SDP.randString(renderArr()));

=======
var getRandom = function(min, max){
    return parseInt(Math.random() * (min + max) - min);
};

var SDP = {
    randString: function(rendArr){
        var randStr = '';
        for(var i = 0; i < 8; i++){
            randStr += rendArr[getRandom(0, 35)];
        }
        return randStr;
    }
};

function renderArr(){
    var arr = [];
    for(var i = 97; i <=122; i++){
        arr.push(String.fromCharCode(i));
    }
    for(var i = 48; i <=57; i++){
        arr.push(String.fromCharCode(i));
    }

    return arr;
}

console.log(SDP.randString(renderArr()));

>>>>>>> 97bff1b82a2f6506a747f2f5e80ab10ce79655d1
