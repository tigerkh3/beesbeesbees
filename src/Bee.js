var Bee = function() {
  // we want to call on the Grub function
  // sets the prototype in our understanding
  Grub.call(this);
  // set age property to be 5
  this.age = 5;
  // set color property
  this.color = 'yellow';
  // set job property as 'keep on growing'
  this.job = 'keep on growing';
};

// setting the prototype by delegating object to Grub prototype
// this allows us to access Grub + it's methods (maybe)?
Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;