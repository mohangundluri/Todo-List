//jshint esversion:6

// module.exports = 'Hello world";


// exports.b = function({
    //c = 30;
    //return c;
//})
module.exports.getDate = function (){
    var date = new Date();
    var options  = {
        weekday :"long",
        day:"numeric",
        month:"long"
    };
    return date.toLocaleDateString("en-US", options);
}

module.exports.a = function(){
    let b = 20;
    return b;
}


// module.exports= {getDate, a}