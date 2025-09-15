document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM cargado, iniciando cuenta regresiva");

  // Fecha objetivo: 16 de Septiembre 2025, 00:00 UTC-3 (Argentina) = 22:00 UTC-5 (Ecuador)
  const birthdayDate = new Date('2025-09-16T03:00:00Z'); // UTC equivalente a 00:00 ARG
  const countdownElement = document.getElementById('countdown');
  const surpriseButton = document.getElementById('surprise-button');
  const waitMessage = document.getElementById('wait-message');

  function updateCountdown() {
    const now = new Date();
    const timeLeft = birthdayDate - now;

    if (timeLeft <= 0) {
      countdownElement.innerText = "¡Ya es la hora!";
      surpriseButton.disabled = false;
      surpriseButton.style.cursor = 'pointer';
      clearInterval(countdownInterval);
    } else {
      const minutes = Math.floor(timeLeft / 1000 / 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
      countdownElement.innerText = `${minutes}:${seconds.toString().padStart(2, '0')} para la sorpresa`;
    }
  }

  // Actualizar cuenta regresiva cada segundo
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  // Mostrar mensaje si intenta hacer clic antes
  surpriseButton.addEventListener('click', () => {
    if (surpriseButton.disabled) {
      waitMessage.classList.remove('hidden');
      setTimeout(() => waitMessage.classList.add('hidden'), 3000); // Oculta después de 3s
    }
  });
});

function revealSurprise() {
  console.log("Botón presionado: Revelando sorpresa");
  const initial = document.getElementById('initial');
  const birthdayMessage = document.getElementById('birthday-message');
  if (initial && birthdayMessage) {
    initial.classList.add('hidden');
    birthdayMessage.classList.remove('hidden');
    launchConfetti();
  } else {
    console.error("Error: No se encontraron los elementos 'initial' o 'birthday-message'");
  }
}

function launchConfetti() {
  console.log("Lanzando confeti");
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#4b0082', '#8b008b', '#000000', '#d8bfd8'] // Morados y negro
  });
}
