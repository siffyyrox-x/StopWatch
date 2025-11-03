let currentTime = 0;
let timerInterval = null;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(function() {
            if (currentTime < 30) {
                currentTime = currentTime + 3;
                document.getElementById('display').innerHTML = currentTime;
                
                if (currentTime >= 30) {
                    stopTimer();
                }
            }
        }, 3000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    currentTime = 0;
    document.getElementById('display').innerHTML = currentTime;
}