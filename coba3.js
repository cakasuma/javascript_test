function smallestCommons(arr) {
    let sortArr = arr.sort(function(a, b){return a - b});
    let multiplication = 1;
    let ctr = parseInt(sortArr[0]);
    
    while(true){
            multiplication = parseInt(sortArr[1])*ctr;
            let checkalldivisable = true;
            for(let j = sortArr[1];j>=sortArr[0];j--){
              if(!(multiplication % j===0)){
                checkalldivisable = false;
              }
            }
            if(checkalldivisable){
              break;
            }
            ctr += 1;
    }
    console.log(multiplication)
    return multiplication;
  }
  
  
  
  
  
  smallestCommons([23,1]);