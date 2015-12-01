// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // flag to check if dancer is stopped
  this.stopped = false;
  // keeps track of position before lining up/stopping
  this.stoppedPosition = {};

  this.step();
};

Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // var that = this;
    if(! this.stopped){
      setTimeout(this.step.bind(this), this.timeBetweenSteps);
    }
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top, left) {
  // save past position
  // stop animation
  this.stoppedPosition = this.$node.position();
  this.stopped = true;

  // first argument clears animation queue
  // second argument jumps to animation end
  this.$node.stop(true, false);
  this.setPosition(top,left);
}

Dancer.prototype.endLineUp = function(){
  // returns dancer to position before line up
  // starts animation
  this.stopped = false;
  this.setPosition(this.stoppedPosition.top, this.stoppedPosition.left);
  this.step();
}