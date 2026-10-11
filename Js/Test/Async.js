async function Testttt() 
{
    try{
        let a = 10
        let b =0 

        let res = await(a/b)

        return res
    }   
    catch(e)
    {   
        console.log(e);
        
    } 
}

console.log(Testttt());

dd= Testttt()

console.log(dd);


// async function main() {
//     const result = await Testttt();
//     console.log(result);
// }

// main();