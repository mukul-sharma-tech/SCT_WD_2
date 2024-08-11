let startTime, lapStartTime, currentTime, elapsedTime = 0;
let isRunning = false;
let lapCount = 1;


const btn = document.getElementById('start');

btn.addEventListener('click', function onClick() {
  if (isRunning) {
    // If stopwatch is running, change background color to red
    btn.style.backgroundColor = 'red';
  } else {
    // If stopwatch is stopped, change background color to green
    btn.style.backgroundColor = 'green';
  }
  // Toggle the text between "Start" and "Stop"
  btn.textContent = isRunning ? 'Stop' : 'Start';
});



function startStopwatch() {
    if (isRunning) {
      stopStopwatch();
    } else {
      if (elapsedTime === 0) {
        startTime = Date.now();
      } else {
        startTime = Date.now() - elapsedTime;
      }
      lapStartTime = startTime;
      isRunning = true;
      updateDisplay();
      playSound();
      requestAnimationFrame(updateStopwatch);
    }
  }


  function stopStopwatch() {
    isRunning = false;
    elapsedTime = Date.now() - startTime;
    updateDisplay();
   

  }

  function resetStopwatch() {
    if (!isRunning) {
      elapsedTime = 0;
      lapCount = 1;
      updateDisplay();
      clearLaps();
    }
  }


  function lapTime() {
    if (isRunning) {
      const lapTime = Date.now() - lapStartTime;
      const formattedTime = formatTime(lapTime);
      addLap(formattedTime);
      lapStartTime = Date.now();
    }
  }


  function updateStopwatch() {
    if (isRunning) {
      currentTime = Date.now() - startTime;
      updateDisplay();
      requestAnimationFrame(updateStopwatch);
    }
  }
  function updateDisplay() {
    const formattedTime = formatTime(isRunning ? currentTime : elapsedTime);
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('start').textContent = isRunning ? 'Stop' : 'Start';
  }


  function formatTime(time) {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / 1000 / 60 / 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMilliseconds = milliseconds.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  }

  function addLap(time) {
    const lapList = document.getElementById('laps');
    const listItem = document.createElement('li');
    listItem.textContent = `Lap ${lapCount}: ${time}`;
    lapList.appendChild(listItem);
    lapCount++;
  }

  function clearLaps() {
    const lapList = document.getElementById('laps');
    lapList.innerHTML = '';
  }

  function playSound() {
    const audio = document.getElementById('startSound');
    audio.currentTime = 0;
    audio.play();
  }



// working ||||?uper wala



//test

// function stopwatch(elem) {
//     var time = 0;
//     var offset;
//     var interval;


// function lapOn(){
//     var lapTime = lap_box.appendChild(document.createElement("li"));
//     lapTime.innerHTML = elem.textContent;
//     lapTime.classList = 'lapItem';
// }

// function lapOff(){
//     return;
// }

// function update(){
//     if(this.inOn){
//         time += delta()
//     }

//     elem.textContent = timeFormatter(time);
// }

// function delta(){
//     var now = Date.now();
//     var timePassed =now - offset;
//     offset = now;
//     return timePassed;
// }

// function timeFormatter(time){
//     time = new Data (time);
//     var minutes = time.getMinutes().toString();
//     var seconds = time.getSeconds().toString();
//     var milliseconds = time.getMilliseconds().toString();

//     if(minutes.length < 2) {
//         minutes = '0' + minutes;
//     }

//     if(seconds.length < 2){
//         seconds = '0' + seconds;
//     }

//     while(milliseconds.length < 3){
//         milliseconds = '0' + milliseconds;
//     }

//     var result = minutes + ':' +seconds + '.' + milliseconds;
//     return result;
// }

// this.start = function(){
//     interval = setInterval(update.bind(this),1);
//     offset = Date.now();
//     this.isOn = true;
// };

// this.stop = function(){
//     clearInterval(interval);
//     interval = null;
//     this.isOn = false;
// };

// this.reset = function(){
//     time = 0;
//     lap_box.innerHTML = '';
//     interval = null;
//     this.isOn = false;
//     update();
// }

// this.lapOn = function(){
//     lapOn();
// }

// this.lapOff = function(){
//     this.lapOff;
// }

// }


// function stopwatch(elem) {
//     var time = 0;
//     var offset;
//     var interval;
//     this.isOn = false; // Initialize the stopwatch state

//     function lapOn() {
//         var lapTime = lap_box.appendChild(document.createElement("li"));
//         lapTime.innerHTML = elem.textContent;
//         lapTime.classList = 'lapItem';
//     }

//     function update() {
//         if (this.isOn) {
//             time += delta();
//         }
//         elem.textContent = timeFormatter(time);
//     }

//     function delta() {
//         var now = Date.now();
//         var timePassed = now - offset;
//         offset = now;
//         return timePassed;
//     }

//     function timeFormatter(time) {
//         time = new Date(time); // Corrected typo: 'Data' to 'Date'
//         var minutes = time.getMinutes().toString();
//         var seconds = time.getSeconds().toString();
//         var milliseconds = time.getMilliseconds().toString();

//         if (minutes.length < 2) {
//             minutes = '0' + minutes;
//         }
//         if (seconds.length < 2) {
//             seconds = '0' + seconds;
//         }
//         while (milliseconds.length < 3) {
//             milliseconds = '0' + milliseconds;
//         }

//         var result = minutes + ':' + seconds + '.' + milliseconds;
//         return result;
//     }

//     this.start = function () {
//         interval = setInterval(update.bind(this), 1);
//         offset = Date.now();
//         this.isOn = true;
//     };

//     this.stop = function () {
//         clearInterval(interval);
//         interval = null;
//         this.isOn = false;
//     };

//     this.reset = function () {
//         time = 0;
//         lap_box.innerHTML = '';
//         interval = null;
//         this.isOn = false;
//         update();
//     };

//     this.lapOn = function () {
//         lapOn();
//     };

//     this.lapOff = function () {
//         // Corrected typo: this.lapOff should be a function
//     };
// }

// var timer = document.querySelector('.timer');
// var toggleBtn = document.querySelector('.toggle'); // Corrected selector
// var lap_box = document.querySelector('.lap_box');

// var watch = new stopwatch(timer);

// function toggleStartStop() {
//     if (watch.isOn) {
//         watch.stop();
//     } else {
//         watch.start();
//     }
//     toggleBtn.textContent = watch.isOn ? 'Stop' : 'Start';
//     toggleBtn.classList.toggle('on');
// }

// function resetAndStop() {
//     watch.stop();
//     watch.reset();
//     toggleBtn.textContent = 'Start';
//     toggleBtn.classList.remove('on');
// }

// toggleBtn.addEventListener('click', toggleStartStop);
// resetBtn.addEventListener('click', resetAndStop);
// lapBtn.addEventListener('click', watch.lapOn);
