const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const whiteKeyboard = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k'];
const blackKeyboard = ['w', 'e', 't', 'y', 'u'];
const dropdown = document.getElementById('sounds');
const button = document.querySelector('.overlay');

const lead = [
  { note: 'C', path: './assets/lead/C.wav' },
  { note: 'Db', path: './assets/lead/Db.wav' },
  { note: 'D', path: './assets/lead/D.wav' },
  { note: 'Eb', path: './assets/lead/Eb.wav' },
  { note: 'E', path: './assets/lead/E.wav' },
  { note: 'F', path: './assets/lead/F.wav' },
  { note: 'Gb', path: './assets/lead/Gb.wav' },
  { note: 'G', path: './assets/lead/G.wav' },
  { note: 'Ab', path: './assets/lead/Ab.wav' },
  { note: 'A', path: './assets/lead/A.wav' },
  { note: 'Bb', path: './assets/lead/Bb.wav' },
  { note: 'B', path: './assets/lead/B.wav' },
  { note: 'C2', path: './assets/lead/C2.wav' }
];

const bass = [
  { note: 'C', path: './assets/bass/C.wav' },
  { note: 'Db', path: './assets/bass/Db.wav' },
  { note: 'D', path: './assets/bass/D.wav' },
  { note: 'Eb', path: './assets/bass/Eb.wav' },
  { note: 'E', path: './assets/bass/E.wav' },
  { note: 'F', path: './assets/bass/F.wav' },
  { note: 'Gb', path: './assets/bass/Gb.wav' },
  { note: 'G', path: './assets/bass/G.wav' },
  { note: 'Ab', path: './assets/bass/Ab.wav' },
  { note: 'A', path: './assets/bass/A.wav' },
  { note: 'Bb', path: './assets/bass/Bb.wav' },
  { note: 'B', path: './assets/bass/B.wav' },
  { note: 'C2', path: './assets/bass/C2.wav' }
];

const pad = [
  { note: 'C', path: './assets/pad/C.wav' },
  { note: 'Db', path: './assets/pad/Db.wav' },
  { note: 'D', path: './assets/pad/D.wav' },
  { note: 'Eb', path: './assets/pad/Eb.wav' },
  { note: 'E', path: './assets/pad/E.wav' },
  { note: 'F', path: './assets/pad/F.wav' },
  { note: 'Gb', path: './assets/pad/Gb.wav' },
  { note: 'G', path: './assets/pad/G.wav' },
  { note: 'Ab', path: './assets/pad/Ab.wav' },
  { note: 'A', path: './assets/pad/A.wav' },
  { note: 'Bb', path: './assets/pad/Bb.wav' },
  { note: 'B', path: './assets/pad/B.wav' },
  { note: 'C2', path: './assets/pad/C2.wav' }
];

const chaos = [
  { note: 'C', path: './assets/chaos/C.wav' },
  { note: 'Db', path: './assets/chaos/C.wav' },
  { note: 'D', path: './assets/chaos/C.wav' },
  { note: 'Eb', path: './assets/chaos/C.wav' },
  { note: 'E', path: './assets/chaos/C.wav' },
  { note: 'F', path: './assets/chaos/C.wav' },
  { note: 'Gb', path: './assets/chaos/C.wav' },
  { note: 'G', path: './assets/chaos/C.wav' },
  { note: 'Ab', path: './assets/chaos/C.wav' },
  { note: 'A', path: './assets/chaos/C.wav' },
  { note: 'Bb', path: './assets/chaos/C.wav' },
  { note: 'B', path: './assets/chaos/C.wav' },
  { note: 'C2', path: './assets/chaos/C.wav' }
];

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  loader.remove();
});

keys.forEach(key => key.addEventListener('click', () => playNote(key)));
dropdown.addEventListener('change', e => changeSound(lead, bass, pad, chaos, e.target.value));
button.addEventListener('click', e => showKeys(e));
document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteKeyboard.indexOf(key);
  const blackKeyIndex = blackKeyboard.indexOf(key);
  whiteKeyIndex > -1 && playNote(whiteKeys[whiteKeyIndex]);
  blackKeyIndex > -1 && playNote(blackKeys[blackKeyIndex]);
});

const playNote = key => {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('pressed');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('pressed');
  });
};

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

const showKeys = e => {
  e.preventDefault();
  const keyboardKeys = document.querySelectorAll('.letter');
  keyboardKeys.forEach(letter => {
    letter.classList.toggle('show');
  });
  if (button.innerText === 'Show Keyboard Overlay') {
    button.innerText = 'Hide Keyboard Overlay';
  } else {
    button.innerText = 'Show Keyboard Overlay';
  }
};