'use strict';

/*Autotext animation*/
var title = document.querySelectorAll('.autotext');
var text = [].slice.call(title);

text.forEach(function (title) {
  var text = title.innerHTML;

  var index = 0;

  var randomSpeed = function randomSpeed(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  var play = function play() {
    title.innerHTML = text.slice(0, index);

    index++;

    /*if (index > text.length) {
      index = 0;
    }*/ //Pour une boucle infinie//

    clearInterval(timer);
    timer = setInterval(play, randomSpeed(100, 500));
  };

  var timer = setInterval(play, 300);
});