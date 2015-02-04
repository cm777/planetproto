// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these 
//    should be empty arrays at first

function Robot () {
	this.parts = [];
}

Robot.prototype.capabilities = [];

var robby = new Robot();
var cranky = new Robot();


// -> Claim the result of robby.parts
claim(robby.parts, []);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, []);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, []);

// -> Add 'core' to robby.parts, cranky.parts should still be empty
// -> Add 'fly' to robby.capabilities, after doing that cranky.capabilities must 
//    also have 'fly' without adding to it directly, so this property has to be 
//    shared

robby.parts.push('core');
robby.capabilities.push('fly');

// -> Claim the result of robby.parts
claim(robby.parts, ['core']);
// -> Claim the result of cranky.parts
claim(cranky.parts, []);
// -> Claim the result of robby.capabilities
claim(robby.capabilities, ['fly']);
// -> Claim the result of cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
};


// function Alien(name) {
//         this.name = name;
//     }

//     // the function Alien has a prototype property
//     // we can add properties to this function prototype
//     Alien.prototype.kind = 'alien'

//     // when we create a new object using new
//     var zippy = new Alien('Zippy');

//     // the __proto__ of the new object points to alien.prototype
//     zippy.__proto__ == Alien.prototype //=> true

//     // in the new object we have access to properties defined in Alien.prototype
//     zippy.kind //=> alien
