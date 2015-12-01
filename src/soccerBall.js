var SoccerBall = function(top, left, timeBetweenSteps){  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="soccerBall dancer" src="assets/soccerBall.png" />');
  this.setPosition(top,left);

  this.$node.on('mouseover', this.randomMovement.bind(this));
};

SoccerBall.prototype = Object.create(Dancer.prototype);
SoccerBall.prototype.constructor = SoccerBall;

SoccerBall.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.rotate({angle: 0, animateTo:360});
/*
  $("#img").rotate({bind:{
  click: function(){
    $(this).rotate({
      angle: 0,
      animateTo:180
      })
    }
  }
  });
  */
}

SoccerBall.prototype.randomMovement = function() {
  var randomH = $("body").height() * Math.random();
  var randomW = $("body").width() * Math.random();

  this.$node.animate({
    "top": randomH,
    "left" : randomW
  }, 1000, "linear");
};