function print() {
    let list = document.querySelectorAll("li"); 
    let listArray = Array.from(list); 

    let innerText = listArray.map(function(value) {
        return value.innerText; 
    });

    let matchedItem = innerText.filter(function(value) {
        return value.includes('e');
    });

    return matchedItem;
}

console.log(print());