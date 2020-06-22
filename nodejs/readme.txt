- modules are wrapped inside a function when it is executed.
So the parameters that we use inside the module is actually passed from that wrapped function.
So we are able to use it. eg: module, require etc

- if we look at that function params, the first parameter exports pointing to module.exports.
So both are pointing to same object

- dont think it is pointing to the same object and we can change the reference.
Then it will break the reference if we directly assign an object.
we can just add parameters and methods in it

- always use module.exports thats better. forget about exports

