// // VAR - Function Level Scope

// function farewell(){
//     for(var i=0; i<=5; i++){
//         console.log('fare thee well')
//     }
//     // still accessible
//     console.log(i)
// }

// farewell();


// LET/CONST - Function Level Scope

function farewell(){
    const count = 0;
    for(let i=0; i<=5; i++){
        console.log('fare thee well')
        // impossible
        // count++; 
    }
    // not accessible
    // console.log(i)
    console.log(count) // still zero
}

farewell();