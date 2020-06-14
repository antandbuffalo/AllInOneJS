function greet() {
    console.log(`Hello...`);
}

module.exports = greet;

// how module and other objects available here
// because v8 engine wraps the content of this entire file inside an IIF
// that function has all these objects as params