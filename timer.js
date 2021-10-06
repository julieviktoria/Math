/* 

    Globals         setTimeout
                    clearTimeout
                    setInterval
                    clearInterval

*/

function returnRandom() {
   return Math.random() * 4; 
}


const randomTimeout = setTimeout(() => {
    console.log(returnRandom());
}, 3000);