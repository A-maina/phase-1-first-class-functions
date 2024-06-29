function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
    return function returnsANamedFunction() {
            return "This Is a Named Function";     
    } ;
    
}
function returnsAnAnonymousFunction() {
 return function() {
    return "an anonymous function";
 };
}