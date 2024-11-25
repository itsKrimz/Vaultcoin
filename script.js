// script.js
document.getElementById('vault-button').addEventListener('click', function () {
  const landingScreen = document.getElementById('landing-screen');
  const vaultAnimation = document.getElementById('vault-animation');
  const mainContent = document.getElementById('main-content');

  // Hide the landing screen
  landingScreen.style.display = 'none';

  // Show vault animation
  vaultAnimation.style.display = 'flex';

  // Wait for animation, then show main content
  setTimeout(() => {
    vaultAnimation.style.display = 'none';
    mainContent.style.display = 'block';
  }, 3000); // 3-second delay for animation
});

// Click-to-Reveal for Memes
document.querySelectorAll('.meme-grid img').forEach(img => {
  img.addEventListener('click', function () {
    const memeUrl = this.getAttribute('data-meme');
    this.src = memeUrl;
  });
});
