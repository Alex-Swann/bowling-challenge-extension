(function () {
 'use strict';
}());

function Bowling(){
  this._currentScore = 0;
  this._scores = [];
}

Bowling.prototype = {
  play: function(number){
    this._scores.push(number);
    this._currentScore += number;
    return number.toString();
  },

  currentScore: function(){
    return this._currentScore;
  },

  scores: function(){
    return this._scores;
  }
};
