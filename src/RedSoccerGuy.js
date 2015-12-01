// RedSoccerGuy moves back and forth horizontally

var RedSoccerGuy = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.goingRight = true;
  this.$node = $('<img class="soccerguy dancer" src="assets/soccerGuyRed.png"/>');
};
RedSoccerGuy.prototype = Object.create(Dancer.prototype);
RedSoccerGuy.prototype.constructor = RedSoccerGuy;

RedSoccerGuy.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if(this.left > $("body").width()){
    this.goingRight = false;
  }
  if(this.left < 0){
    this.goingRight = true;
  }
  if(this.goingRight){
    this.$node.animate({
      "left": this.left += this.timeBetweenSteps / 10,
      /* @keyframes duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name */
     //"transition-property": "left",
     //"transition-duration": ""+this.timeBetweenSteps+"s"
      //animate-duration: this.timeBetewenSteps
    }, this.timeBetweenSteps, "linear");
  }
  if(!this.goingRight){
    this.$node.animate({
     "left": this.left -= this.timeBetweenSteps / 10 ,
     //"transition-property": "left",
     //"transition-duration": ""+this.timeBetweenSteps+"s"
   }, this.timeBetweenSteps, "linear");
  }
};
