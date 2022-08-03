let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

const results = generateError('An error ocurred', 500);
console.log(results);

console.log('searching for data...');
