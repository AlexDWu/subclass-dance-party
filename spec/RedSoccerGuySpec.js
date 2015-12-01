describe("RedSoccerGuy", function() {

  var redSoccerGuy;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    redSocceGuy = new RedSoccerGuy(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(redSoccerGuy.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(redSoccerGuy.$node, 'toggle');
    redSoccerGuy.step();
    expect(redSoccerGuy.$node.toggle.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(redSoccerGuy, "step");
      expect(redSoccerGuy.step.callCount).to.be.equal(0);       
        
    redSoccerGuy = new redSoccerGuy(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);


      expect(redSoccerGuy.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(redSoccerGuy.step.callCount).to.be.equal(2);
    });
  });
});