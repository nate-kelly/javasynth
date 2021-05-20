const changeSound = (pianoSounds, synthSounds, preset) => {
  if (preset === 'Piano') {
    pianoSounds.forEach(sound => {
      document.getElementById(sound.note).setAttribute('src', sound.path);
    });
  } else if (preset === 'Synth') {
    synthSounds.forEach(sound => {
      document.getElementById(sound.note).setAttribute('src', sound.path);
    });
  }
};

export default changeSound;