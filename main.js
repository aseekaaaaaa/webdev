function das() {
  let i = 0;
  let text =
    "Satisfied with service Everything is done quickly, feedback is on top. The guys go out of their way to make your stay comfortable, recommend!";
  let interval = setInterval(function () {
    document.getElementById("demo").innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, 50);
}
das();
function dasd() {
  let i = 0;
  let text =
    "Hello! I liked everything! The holiday was just wonderful! Many thanks to your KZguide! With you it is very comfortable, stable!";
  let interval = setInterval(function () {
    document.getElementById("demo1").innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, 50);
}
dasd();
let i = 0;
function plays() {
    // document.getElementById('myaudio').play();
    i++;
    console.log(i)
    document.getElementById("demo123").innerHTML = i;
    var audio = document.getElementById("audio");
    audio.play();
  }
function bigImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
}

function alt()
{
    alert('Be respectfull for each other');
    
}