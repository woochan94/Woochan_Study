// const name = "crong"; 
// const age = 20; 

// const obj = { 
//     name : name,
//     age : age
// }

// console.log(obj);

function getObj() {
    const name = "crong"; 

    const getName = function() {
        return name; 
    }

    const setName = function(newName) {
        name = newName;
    }

    const printName = function() {
        console.log(name);
    }

    return {getName, setName, name}
}

var obj = getObj();
console.log(obj);