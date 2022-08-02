function combine(input1, input2, resultConversions) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversions === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversions === 'as-number'){
    //     return +result;
    // } else{
    //     return result.toString();
    // }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine("Ban", "Anna", 'as-text');
console.log(combinedNames);
