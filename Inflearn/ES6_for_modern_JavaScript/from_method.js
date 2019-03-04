// ES2015 from methd 

function addMark() {
    let newArray = Array.from(arguments);
    let newData = newArray.map(function(value) {
        return value + "!";
    });
    // for (let i = 0; i < arguments.length; i++) {
    //     newData.push(arguments[i] + "!");
    // }


    console.log(newData); 
}

addMark(1,2,3,4,5);