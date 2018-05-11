var difficulty;
var score = 0;
var res;
var counter;
var loop = 0;

function read(level, ans) {

  if (ans == 'false') {

    if (loop === 0) {
      document.querySelector('#score').textContent = 'Score: 0';
      time(9);
    }
    console.log("jeden");

    var min, max;
    difficulty = level;

    document.querySelector('#start').style.display = 'none';
    document.querySelector('#game').style.display = 'initial';
    if (difficulty === 'easy') {
      max = 10;
      min = 2;
    } else if (difficulty === 'medium') {
      max = 50;
      min = 21;
    } else if (difficulty === 'hard') {
      max = 1000;
      min = 100;
    }

    var x = Math.floor((Math.random() * (max - min + 1)) + min);
    var y = Math.floor((Math.random() * (max - min + 1)) + min);
    var z = Math.floor((Math.random() * (max - min + 1)) + min);
    document.getElementById('operation').textContent = x + '+' + y + '+' + z;

    shuffle = Math.floor((Math.random() * 4) + 1);
    res = x + y + z;
    var otherRes = [];
    var notRes = res - 5;
    var repeat;
    for (i = 0; i <= 2; i++) {
      do {
        repeat = false;

        otherRes[i] = Math.floor((Math.random() * 10) + notRes)

        if (i != 0) {
          for (j = i - 1; j >= 0; j--) {
            if (otherRes[j] === otherRes[i]) {
              repeat = true;
            }

          }
        }

      }
      while (otherRes[i] === res || repeat === true)
      // console.log(otherRes[i]);

    }
    if (shuffle === 1) {
      document.getElementById('a').textContent = res;
      document.getElementById('b').textContent = otherRes[0];
      document.getElementById('c').textContent = otherRes[1];
      document.getElementById('d').textContent = otherRes[2];
    } else if (shuffle === 2) {
      document.getElementById('a').textContent = otherRes[0];
      document.getElementById('b').textContent = res;
      document.getElementById('c').textContent = otherRes[1];
      document.getElementById('d').textContent = otherRes[2];
    } else if (shuffle === 3) {
      document.getElementById('a').textContent = otherRes[0];
      document.getElementById('b').textContent = otherRes[1];
      document.getElementById('c').textContent = res;
      document.getElementById('d').textContent = otherRes[2];
    } else if (shuffle === 4) {
      document.getElementById('a').textContent = otherRes[0];
      document.getElementById('b').textContent = otherRes[1];
      document.getElementById('c').textContent = otherRes[2];
      document.getElementById('d').textContent = res;
    }
    loop++;
  }

  if (level == 'false') {

    choice = document.getElementById(ans).textContent;
    if (choice == res) {
      document.querySelector('#correct').classList.remove('bad');
      document.querySelector('#correct').classList.add('good');

      score++;
      document.querySelector('#score').textContent = 'Score: ' + score;
      var i = 0;
      document.querySelector('#correct').textContent = 'good';




      var show = setInterval(function() {
        i++;

        if (i === 1) {
          clearInterval(show);
          document.querySelector('#correct').textContent = '';

        }
      }, 500);

      read(difficulty, 'false');
    } else {

      document.querySelector('#correct').classList.add('bad');
      document.querySelector('#correct').textContent = 'wrong';
      i = 0;

      read(difficulty, 'false');


      var show = setInterval(function() {
        i++;

        if (i === 1) {
          clearInterval(show);
          document.querySelector('#correct').textContent = '';

        }
      }, 500);

    }

  }

  function time(counter) {


    document.getElementById('time').textContent = 'Time: ' + (counter + 1);
    var countDown = setInterval(function() {

      document.getElementById('time').textContent = 'Time: ' + counter;

      counter--;
      if (counter < 0) {
        document.querySelector('#game').style.display = 'none';
        document.querySelector('#results').style.display = 'initial';
        document.querySelector('#points').innerHTML = '<h1>Time\'s up</h1><p>your score: ' + score + '</p>';


        clearInterval(countDown);
      }
    }, 1000);

  }



}
document.querySelector('#reset').addEventListener('click', function() {
  init();

});

function init() {
  score = 0;
  loop = 0;
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#start').style.display = 'initial';
  document.getElementById('score').textContent = '';
  document.getElementById('time').textContent = '';


}
