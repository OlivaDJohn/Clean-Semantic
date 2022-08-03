function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number) /*: undefined*/{
    console.log('Result: '+ num);
    //return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1+n2;
    cb(result);
}

printResult(add(5, 12));

let combineValues: (a:number, b:number) => number;
combineValues = add;
//combineValues = printResult;
//combineValues = 5;

printResult(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});