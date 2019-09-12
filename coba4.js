function convertToRoman(num) {
    let romanNum = num.toString();
    let arrNum = []
    const obj = {
        "1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI"
    }
    for(let i = 0;i< romanNum.length;i++){
        if(romanNum[i] < 4){
            arrNum.push(parseInt(romanNum[i])*obj["1"])
        }
        
    }


    return arrNum[0];
   }
   
console.log(convertToRoman(3));