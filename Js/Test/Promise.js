console.log("Hello From JS");


let a = new Promise((res, rej) => {

    let c = 100
    let d = 200


    setTimeout(() => {

        if (c < d) {
            text = "hello this is resolve state"
            res(text)
        }
        else {
            rej("Hello")
        }

    }, 3000)

})

console.log(a);

a
    .then((res) => {
        console.log(res);

    })
    .catch((e) => {
        console.log(e);

    })

