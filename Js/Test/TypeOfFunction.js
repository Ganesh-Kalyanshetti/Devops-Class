
//Named Function
function a(l)
{
    console.log(l);
    
}
a(10);


// Function With Expression
let res = function(a,b)
{
    console.log("The sum is "+(a+b));
    return
    
}


res(10,20);


//First Class Function
function greet()
{
    console.log("Good Morning");
    
}

let g = greet;
g();


let gg = greet();
gg;



//Anonyms function we cant call it so we use Immediately Invoked Function Expression - IIFE

(()=>{
    console.log("Hello");
    
})();



//CallBack Function - A function passed as an argument to another function.

function add(a,b)
{
    console.log("This is Add "+(a+b));
    
}
function Process(aa,bb,a)
{
    console.log(aa);
    console.log(bb);
    
    a(aa,bb);
}

Process(10,20,add)



// Higer order function -A function that:
// accepts another function OR
// returns another function

function operate(a,b,fn)
{
    return fn(a,b)
}

function aa(x,y)
{
    return x+y;
}

console.log("Operating ",operate(2,3,aa));


//Nested Function
function outer()
{

    function inner(){
        console.log("Hello From inner");
        
    }
    console.log("Outer-- started");
    
    inner();

    
    console.log("Outer-- Ended");
}

outer();



function addd(a)
{
    function sub(b)
    {
        console.log("Inside sub");
        console.log("This is a "+a);
        console.log("This is b "+b);
        
    }

    return sub
}
addd(10)(20)