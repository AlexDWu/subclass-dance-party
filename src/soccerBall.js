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

  var resumeAnimation = function(){
    this.$node.stop(true, false);
    this.$node.animate({
      "top": randomH,
      "left" : randomW,
    }, {
      duration: 1000, 
      easing: "linear",
      complete: function(){
        //check if ball is in the goal
        // get left goal dimentions and postion
        var $leftGoal = $(".leftGoal");
        var leftGoal = {
          left: $leftGoal.position().left,
          right: $leftGoal.position().left + $leftGoal.width(),
          top: $leftGoal.position().top,
          bottom: $leftGoal.position().top + $leftGoal.height(),
        }
        if(randomH > leftGoal.top && randomH < leftGoal.bottom &&
          randomW > leftGoal.left && randomW < leftGoal.right){
          window.redScore++;
          $(".redTeamScore").text(window.redScore);
          $(".topbar").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }
        var $rightGoal = $(".rightGoal");
        var rightGoal = {
          left: $rightGoal.position().left,
          right: $rightGoal.position().left + $rightGoal.width(),
          top: $rightGoal.position().top,
          bottom: $rightGoal.position().top + $rightGoal.height(),
        }
        if(randomH > rightGoal.top && randomH < rightGoal.bottom &&
          randomW > rightGoal.left && randomW < rightGoal.right){
          window.blueScore++;
          $(".blueTeamScore").text(window.blueScore);
          $(".topbar").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        }
      },
    });
  };
  if(this.$node.queue('fx') > 0){
    setTimeout(resumeAnimation.bind(this), 500);
  } else{
    resumeAnimation.call(this);
  }
  //console.log(this.$node.queue('fx'));

};