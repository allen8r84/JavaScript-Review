var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here
var new1 = callFriend();
new1("435-215-9248");


/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/
var callBack = function() {
    console.log("this only works once");
}
var outerFunction = function(cb) {
    var x = 0;
    return function(){
    if (x === 0) {
        x++;
        cb();
    } else {
        return undefined;
    }
    }
}
var innerFunction = outerFunction(callBack);

///second part
var callBack = function() {
    console.log("Again...");
}
var outerFunction = function(cb, n) {
    var x = 0;
    return function(){
    if (x < n) {
        x++;
        cb();
    } else if (x === n) {
        x++;
        console.log("STAHHP")
    } else {
        return undefined;
    }
    }
}
var innerFunction = outerFunction(callBack, 7);