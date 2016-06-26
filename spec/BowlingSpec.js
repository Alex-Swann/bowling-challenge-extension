(function () {
 'use strict';
}());

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('#currentScore', function(){
    it('shows current score which starts at 0', function(){
      expect(bowling.currentScore()).toEqual(0);
    });

    it('sums consecutive scores with each result', function(){
      bowling.play(5);
      bowling.play(4);
      expect(bowling.currentScore()).toEqual(9);
    });
  });

  describe('#play', function(){
    it('only returns result in frame without spare/strike', function(){
      expect(bowling.play(5)).toEqual('5');
    });
    it('returns result 2 rolls after strike', function(){
      expect(bowling.play(10)).toEqual('');
    });
  });

  describe('#scores', function(){
    it('contains scores of each throw', function(){
      bowling.play(5);
      bowling.play(4);
      expect(bowling.scores()).toEqual([5,4]);
    });
  });

});
