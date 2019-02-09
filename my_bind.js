Function.prototype.myBind = function(context) {
  // return this.apply(context);
  return () => {
    return this.apply(context); // => does not change context. ES5 way changes context, results in undefined function 
  }
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  return "Turning on " + this.name;
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

console.log(boundTurnOn()); // should say "Turning on a lamp"
console.log(myBoundTurnOn()); // should say "Turning on a lamp"

