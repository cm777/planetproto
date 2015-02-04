// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

function Robot () {
	// return this;
}

function Vehicle () {
	return {};
}

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
};

// function Alien() {
//         this.kind = 'alien'
//     }
//     var zippy = new Alien();
//     zippy.kind //=> 'alien'

// Behind the scenes is doing something like:
//     function Alien() {
//         var this = {}; // this is not valid, just for illustration
//         this.__proto__ = Alien.prototype;
//         this.kind = 'alien'
//         return this;
//     }
