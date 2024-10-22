let timer;
let elapsedTime = 0;
let running = false;

function updateTime() {
    elapsedTime += 10; // Increment by 10 milliseconds
    let totalMilliseconds = elapsedTime % 1000;
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    totalMilliseconds = totalMilliseconds < 100 ? '0' + Math.floor(totalMilliseconds / 10) : Math.floor(totalMilliseconds / 10);

    document.getElementById('watch').innerText = `${hours}:${minutes}:${seconds}:${totalMilliseconds}`;
}

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10); // Update every 10 milliseconds
    }
}

function pauseStopwatch() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function resetStopwatch() {
    pauseStopwatch();
    elapsedTime = 0;
    document.getElementById('watch').innerText = '00:00:00:00';
}

// Add event listeners to buttons
document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
