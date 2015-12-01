describe("SoccerBall", function() {

  var SoccerBall;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    soccerBallr = new SoccerBall(10, 20, timeBetweenSteps);
  });
  it("should pass on a mouse over"){
    sinon.spy()
    sinon.spy(soccerBall.$node, )
  }
/*
  it("should have a jQuery $node object", function() {
    expect(soccerBall.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(soccerBall.$node, 'toggle');
    soccerBall.step();
    expect(soccerBall.$node.toggle.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(soccerBall, "step");
      expect(soccerBall.step.callCount).to.be.equal(0);       
        
    soccerBall = new soccerBall(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);


      expect(soccerBall.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(soccerBall.step.callCount).to.be.equal(2);
    });
*/
  });
});