const imagem = document.getElementById('imagem');
const musica = document.getElementById('musica');

imagem.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});