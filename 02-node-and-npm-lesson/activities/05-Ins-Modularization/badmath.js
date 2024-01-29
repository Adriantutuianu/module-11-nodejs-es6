const pie = 'apple';

const predictable = () => 1;

// module.exports is an object we use to store variables or methods
// In this export object we are using property value shorthand
/*
  property value shorthand:
    # If you want to define a property in an object, and that key name already exists as a variable within the object's scope, you don't have to explicitly assign a value. You can use just the key name, and that variable's value is used automatically.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
*/
module.exports = {
  pie,
  predictable,
};


