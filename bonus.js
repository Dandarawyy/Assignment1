var createCounter = function(init){
    let counter=init;
    function increment(){
        return ++counter;
    }
    function decrement(){
        return --counter;
    }
    function reset(){
        counter=init;
        return counter;
    }
    
    return{
        increment: increment,
        decrement: decrement,
        reset: reset
    }
}