import { capitalizeString } from "./string_function";


const cap  =capitalizeString("hello!");
console.log(cap);

const capitalizeString1 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export{capitalizeString1 };

export const foo = "bar";
export const bar = "foo";

import * as capitalizeString from "./string_function";

import susbtract from "./string_function";