const changeSound = (lead, bass, pad, chaos, preset) => {
  if (preset === 'lead') {
    lead.forEach(sound => {
      document.getElementById(sound.note).setAttribute('src', sound.path);
    });
  } else if (preset === 'bass') {
    bass.forEach(sound => {
      document.getElementById(sound.note).setAttribute('src', sound.path);
    });
  } else if (preset === 'pad') {
    pad.forEach(sound => {
      document.getElementById(sound.note).setAttribute('src', sound.path);
    });
  } else if (preset === 'chaos') {
    chaos.forEach(sound => {
      document.getElementById(sound.note).setAttribute('src', sound.path);
    });
  }
};

export default changeSound;