// RedSoccerGuy moves back and forth horizontally

var RedSoccerGuy = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.hasBall = false;
  
  this.$node = $('<img style="position:absolute" class="soccerguy dancer" src="assets/soccerGuyRed.png"/>');
  this.setPosition(top,left);
  this.goingRight = false;
  this.walkingDistance = $("body").width() * 0.95;
};
RedSoccerGuy.prototype = Object.create(Dancer.prototype);
RedSoccerGuy.prototype.constructor = RedSoccerGuy;

RedSoccerGuy.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var position = this.$node.position();
  var ballPosition = window.ball.$node.position();
 
  if ((position.top < (ballPosition.top + 60)) && ((position.top + 110) > (ballPosition.top)) &&
    (position.left < (ballPosition.left + 60)) && ((position.left + 110) > (ballPosition.left))) {
    // console.log('left workweds');
    window.ball.randomMovement();
  }

  if(position.left >= this.walkingDistance - 70){
    this.goingRight = false;
    this.$node.removeClass("flip");
  }
  if(position.left < 0){
    this.goingRight = true;
    this.$node.addClass("flip");
  }
  if(this.goingRight){
    this.$node.animate({
      "left": "+=" + (this.timeBetweenSteps / 10) + "px" ,
      //"top": "+= 0px" ,
    }, this.timeBetweenSteps, "linear");
  }
  if(!this.goingRight){
    this.$node.animate({
     "left": "-=" + (this.timeBetweenSteps / 10) + 'px' ,
     //"top": "+= 0px",
   }, this.timeBetweenSteps, "linear");
  }
};
