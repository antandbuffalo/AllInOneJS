const score = 123456.789;
console.log(score.toLocaleString("en"));
console.log(score.toLocaleString("vi"));

let numberOfDecimal = 2;
let lang = 'en';
const rounded = 12345.678;
console.log(`lang is ${lang} and the value is ${parseFloat(rounded.toFixed(numberOfDecimal)).toLocaleString(lang)}`);

lang = 'id';
console.log(`lang is ${lang} and the value is ${parseFloat(rounded.toFixed(numberOfDecimal)).toLocaleString(lang)}`);

lang = 'vi';
console.log(`lang is ${lang} and the value is ${parseFloat(rounded.toFixed(numberOfDecimal)).toLocaleString(lang)}`);