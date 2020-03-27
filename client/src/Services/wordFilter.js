const words = require('./bannedwords.js')


 function wordFilter (text) {
    console.log(words)
    let arr = text.trim().split(" ")
    console.log(arr);
    let count = 0;
    for(i=0; i < arr.length; i++){
        if(arr[i] === words[count]){
            arr[i] = '####'
        }
    }
    console.log(arr.toString())
}

wordFilter("this is a really poopy day!")