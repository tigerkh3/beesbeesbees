var ForagerBee = function() {
  // call the Bee superclass
  HoneyMakerBee.call(this);
  // new job property
  this.job = 'find pollen';
  // new canFly property
  this.canFly = true;
  // new treasureChest property
  this.treasureChest = [];
};

// set the prototype
ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
// set the constructor
ForagerBee.prototype.constructor = ForagerBee;

// new forage method that allows bee to add treasure to treasureChest
ForagerBee.prototype.forage = function (treasure) {
  // we want to just add treasure into the array
  // just push it into the array
  this.treasureChest.push(treasure);
}



