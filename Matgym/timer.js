// Obtenemos el elemento donde se mostrará el tiempo
const timeDisplay = document.getElementById("timePanel");

// Obtenemos el botón para iniciar la sesión
const startBtn = document.getElementById("startSession");

// Obtenemos el audio que sonará cada 10 minutos
const alertSound = document.getElementById("alertSound");

// Variable que guarda los segundos transcurridos desde que empezó la sesión
let elapsedSeconds = 0;

// Guardamos los intervalos para no crear varios si se pulsa más de una vez
let timerInterval = null;
let soundInterval = null;

// Convierte los segundos a formato 00:00:00
function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

// Actualiza el contador en pantalla
function updateTime() {
  timeDisplay.innerText = formatTime(elapsedSeconds);
  elapsedSeconds++;
}

// Reproduce el sonido desde el principio
function playSound() {
  alertSound.currentTime = 0;
  alertSound.play().catch(() => {
    // Si el navegador bloquea el audio, no mostramos error
  });
}

// Arranca la sesión al hacer clic en el botón
startBtn.addEventListener("click", () => {
  // Evita que se creen varios intervalos
  if (timerInterval) return;

  // Muestra el tiempo inicial 00:00:00
  updateTime();

  // Actualiza el contador cada segundo
  timerInterval = setInterval(updateTime, 1000);

  // Reproduce el sonido cada 10 minutos
  soundInterval = setInterval(playSound, 10 * 60 * 1000);
});