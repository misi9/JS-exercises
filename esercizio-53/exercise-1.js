function sum(...numbs) {
    let value = numbs.reduce((value, operation)=> value + operation, 0);
    return value
}

console.log(sum(1, 2, 3, 4, 5));