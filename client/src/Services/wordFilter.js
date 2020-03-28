const words = require('./bannedwords.js')

function wordFilter (text) {
    let arr = text.trim().split(" ")
    let count = 0;

    function filter(){
        if(count === text.length){
            console.log(arr.toString().split(",").join(" "))
        }
        else{
            for(let i=0; i < arr.length; i++){
                if(arr[i].toLowerCase() === words[count]){
                    arr[i] = '####'
                }
            }
            count = count + 1;
            filter()
        }
    }
    return filter()
}


export default wordFilter