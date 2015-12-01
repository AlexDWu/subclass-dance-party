// RedSoccerGuy moves back and forth horizontally

var RedSoccerGuy = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<img class="soccerguy dancer" src="assets/soccerGuyRed.png"/>');
  this.setPosition(top,left);
  this.goingRight = true;
};
RedSoccerGuy.prototype = Object.create(Dancer.prototype);
RedSoccerGuy.prototype.constructor = RedSoccerGuy;

RedSoccerGuy.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var position = this.$node.position();
  console.log(this.$node.position().top);

  if(position.left > $("body").width()){
    this.goingRight = false;
  }
  if(position.left < 0){
    this.goingRight = true;
  }
  if(this.goingRight){
    this.$node.animate({
      "left": "+=" + (this.timeBetweenSteps / 10) + "px" ,
      "top": "+= 0px" ,
    }, this.timeBetweenSteps, "linear");
  }
  if(!this.goingRight){
    this.$node.animate({
     "left": "-=" + (this.timeBetweenSteps / 10) + 'px' ,
     "top": "+= 0px",
   }, this.timeBetweenSteps, "linear");
  }
};
