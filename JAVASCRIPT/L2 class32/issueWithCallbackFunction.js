
//* 1. Code Readability Issue.
//* 2. Pyramind of Dom.
//* 3. Inversion of Control.
//* 4. Callback Hell.

function test(cbfn){
    cbfn();
}
test(function testing1(){
    console.log("testing1");
    test((function testing2(){
        console.log("testing2");
        test((function testing3(){
            console.log("testing3");
            test((function testing4(){
                console.log("testing4");
                test((function testing5(){
                    console.log("testing5");
                    test((function testing6(){
                        console.log("testing6");
                        test((function testing7(){
                            console.log("testing7");
                            test((function testing8(){
                                console.log("testing8");
                                test((function testing9(){
                                    console.log("testing9");
                                    test((function testing10(){
                                        console.log("testing10");
                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        }))
    }))
    
})

// ! This is a Interview Question also --> What is callback function and its issues?

/*

//* How to Resolve callback issues

1. Promise.

2. Async Await.


*/