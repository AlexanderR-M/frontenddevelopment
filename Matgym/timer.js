const timeDisplay = document.getElementById("timePanel");
const sessionSound = document.getElementById("sessionSound");

const sessionStart = Date.now();
let lastSoundMinuteBlock = -1;

function updateTime() {
    const elapsedMs = Date.now() - sessionStart;

    const totalSeconds = Math.floor(elapsedMs / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;

    const tenMinuteBlock = Math.floor(totalSeconds / 600);
    const isExactTenMinuteMark = totalSeconds > 0 && totalSeconds % 600 === 0;

    if (isExactTenMinuteMark && tenMinuteBlock !== lastSoundMinuteBlock) {
        lastSoundMinuteBlock = tenMinuteBlock;
        sessionSound.currentTime = 0;
        sessionSound.play().catch(() => {});
    }
}

updateTime();
setInterval(updateTime, 1000);