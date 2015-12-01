var Referee = function(top, left, timeBetweenSteps) {
  RedSoccerGuy.call(this, top, left, timeBetweenSteps );

  this.$node = $('<img class="referee dancer" src="assets/referee.png"/>');
  this.setPosition(30,50);  
}

Referee.prototype = Object.create(RedSoccerGuy.prototype);
Referee.prototype.constructor = Referee;
/*
Referee.prototype.step = function() {
  RedSoccerGuy.prototype.step.call(this);
}
*/