

function steamrollArray(arr) {
    // I'm a steamroller, baby
    let newArr = []
    arr.forEach(n => {
      newArr.push(n)
    })
    console.log(newArr)
    return newArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);