export let greeting = 'Hello';

export function greet() {
    console.log(`${greeting} ES6 module`);
}

export default function greet1() {
    console.log(`${greeting} 1`);
}

export function changeGreeting() {
    greeting = 'Changed Hello';
}
