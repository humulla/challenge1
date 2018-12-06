var number = new Array(101)
for (var i = 0; i < 101; i++){
    if(i % 3 && i % 5){
        console.log(i)
    } else{
        if(i % 3 == 0){
            console.log('Fizz')
        }
        if(i % 5 == 0){
            console.log('Buzz')
        }
        if((i % 3 == 0) && (i % 5 == 0)){
            console.log('Fizz Buzz')
        }
    }
    
}

// for (var i = 0; i < 101; i++){
//     number[i] = i + 1; 
    
//     if(i % 3 == 0){
//         console.log('Fizz')
//     }
//     if(i % 5 == 0){
//         console.log('Buzz')
//     }
//     if((i % 3 == 0) && (i % 5 == 0)){
//         console.log('Fizz Buzz')
//     }
//     if((i % 3 != 0) && (i % 5 != 0)){
//         console.log(i)
//     }
// }