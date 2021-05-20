const playNote = key => {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('pressed');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('pressed');
  });
};

export default playNote;