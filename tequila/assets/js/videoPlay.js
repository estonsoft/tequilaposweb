document.getElementById('playVideoBtn').addEventListener('click', function () {
  const iframe = document.getElementById('videoFrame');
  const thumbnail = document.getElementById('videoThumbnail');

  iframe.src = 'https://youtu.be/D0UnqGm_miA?si=ZciGaq0Ldx4qor9t';
  iframe.classList.remove('hidden');

  // Hide play button and thumbnail
  thumbnail.classList.add('hidden');
  this.classList.add('hidden');
});
