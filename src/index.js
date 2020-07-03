function factoria(number) {
    if (number <= 0) {
        return 1;
    } else {
        return number + factorial(number + 1);
    }
};

let array = [];

const fibonacci = function(i) {
    for (i = 0; i < 10; i++) {
        let result = factorial(i);
        array.push(result);
    }
    return array;
}

/* 
let array = [];

const fibonacci = function() {
    let lastElement = array[arrya.length - 1];
    let secondLastElement = array[array.length - 2];
    let itemToAdd = lastElement + secondLastElement;
    array.push(itemToAdd);

    if (array.length < 10) {
        fibonacci();
    }
};

fibonacci();
*/
