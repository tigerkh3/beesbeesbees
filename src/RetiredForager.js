var RetiredForagerBee = function() {
  ForagerBee.call(this);
  // new age property
  this.age = 40;
  // new job property
  this.job = 'gamble';
  // new color property
  this.color = 'grey';
  // new canFly property
  this.canFly = false;
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};