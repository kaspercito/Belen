function revealSurprise() {
  document.getElementById('initial').classList.add('hidden');
  document.getElementById('birthday-message').classList.remove('hidden');
  launchConfetti();
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#4b0082', '#8b008b', '#000000', '#d8bfd8'] // Morados y negro
  });
}
