$(document).ready(function() {
  window.dancers = [];
  window.myTime = 100;
  window.ball = new SoccerBall(($("body").height())/2.1, ($("body").width())/2.05, myTime);
  $('body').append(window.ball.$node);
  window.redScore = 0;
  $('.redTeamScore').text(window.redScore);
  window.blueScore = 0;
  $('.blueTeamScore').text(window.blueScore);


    $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      myTime
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event){
    // make the dancers line up
    
    if( $(this).hasClass("notLinedUp")){
      var leftDistance = 10;
      for(var i = 0; i < dancers.length; i++){
        dancers[i].lineUp(400, leftDistance);
        leftDistance = leftDistance + 80;
      }
      // change class and text to not lineUp button
      $(this).addClass("linedUp");
      $(this).removeClass("notLinedUp");
      $(this).text("End Line Up!");
    } else {
      for(var i = 0; i < dancers.length; i++){
        dancers[i].endLineUp();
      }
      $(this).addClass("notLinedUp");
      $(this).removeClass("linedUp");
      $(this).text("Line Up!")
    }
  });
  $('.leftGoal').css({
    "border": "2px solid red",
    "top" : ($('body').height())/3.2,
    "left": 0,
    "width": "100px",
    "height": "220px",
    "position" : "absolute"
  });
  $('.rightGoal').css({
    "border": "2px solid red",
    "top" : ($('body').height())/3.2,
    "left": ($('body').width() - 100),
    "width": "100px",
    "height": "220px",
    "position" : "absolute"
  });
});

