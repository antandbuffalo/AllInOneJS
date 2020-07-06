- modules are wrapped inside a function when it is executed.
So the parameters that we use inside the module is actually passed from that wrapped function.
So we are able to use it. eg: module, require etc

- if we look at that function params, the first parameter exports pointing to module.exports.
So both are pointing to same object

- dont think it is pointing to the same object and we can change the reference.
Then it will break the reference if we directly assign an object.
we can just add parameters and methods in it

- always use module.exports thats better. forget about exports

- callbacks exist in other languages also. like c++. it has the library libuv

- NodeJS is async. that means v8 engine in node can run in parallel while
the core c++ lib was doing something else. It is same like, JS in sync but
the browser is async. Browser can do multiple things in parallel but JS do one at a time

- Stream: a sequence of data available over time. Sequence of data moving over time

Buffer and Stream: When data streamed, it is buffered and then processed. It continues in
a stream. Eg: Streaming a movie

Characters eg: hello
Character set: Unicode or ASCII code - What number, each character is represented by.
we assign each character, letters and symbols a number
Character encoding: UTF-8 (8 bits are used to store one character). How many bits we are
using to store that number (from character set)
