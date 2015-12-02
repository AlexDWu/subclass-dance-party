describe("RedSoccerGuy", function() {

  var redSoccerGuy;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    redSoccerGuy = new RedSoccerGuy(10, 20, timeBetweenSteps);
    $('body').append(redSoccerGuy.$node);
  });

  it("should have a jQuery $node object", function() {
    console.log(redSoccerGuy);
    expect(redSoccerGuy.$node).to.be.an.instanceof(jQuery);
  });

  // it("should have a step function that makes it move side to side, one movement after first step", function() {
  //   sinon.spy(redSoccerGuy.$node, 'animate');
  //   console.log(redSoccerGuy.$node.position());
  //   console.log(clock);
  //   redSoccerGuy.step();
  //   expect(redSoccerGuy.$node.animate.called).to.be.true;
  //   clock.tick(timeBetweenSteps * 2);
  //   console.log(clock);
  //   console.log(redSoccerGuy.$node.position());
  //   expect(redSoccerGuy.$node.position().left).to.be.equal(20 + timeBetweenSteps / 10);
  // });

  it("should delegate to Dancer", function(){
    expect(redSoccerGuy).to.be.an.instanceof(Dancer);
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