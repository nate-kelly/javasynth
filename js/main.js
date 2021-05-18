const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const whiteKeyboard = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k'];
const blackKeyboard = ['w', 'e', 't', 'y', 'u'];
const dropdown = document.getElementById('sounds');
const button = document.querySelector('.overlay');
const pianoSounds = [
  { note: 'C', path: '/assets/piano-notes/C.mp3' },
  { note: 'Db', path: '/assets/piano-notes/Db.mp3' },
  { note: 'D', path: '/assets/piano-notes/D.mp3' },
  { note: 'Eb', path: '/assets/piano-notes/Eb.mp3' },
  { note: 'E', path: '/assets/piano-notes/E.mp3' },
  { note: 'F', path: '/assets/piano-notes/F.mp3' },
  { note: 'Gb', path: '/assets/piano-notes/Gb.mp3' },
  { note: 'G', path: '/assets/piano-notes/G.mp3' },
  { note: 'Ab', path: '/assets/piano-notes/Ab.mp3' },
  { note: 'A', path: '/assets/piano-notes/A.mp3' },
  { note: 'Bb', path: '/assets/piano-notes/Bb.mp3' },
  { note: 'B', path: '/assets/piano-notes/B.mp3' }
];
const synthSounds = [
  { note: 'C', path: '/assets/notes/C.wav' },
  { note: 'Db', path: '/assets/notes/Db.wav' },
  { note: 'D', path: '/assets/notes/D.wav' },
  { note: 'Eb', path: '/assets/notes/Eb.wav' },
  { note: 'E', path: '/assets/notes/E.wav' },
  { note: 'F', path: '/assets/notes/F.wav' },
  { note: 'Gb', path: '/assets/notes/Gb.wav' },
  { note: 'G', path: '/assets/notes/G.wav' },
  { note: 'Ab', path: '/assets/notes/Ab.wav' },
  { note: 'A', path: '/assets/notes/A.wav' },
  { note: 'Bb', path: '/assets/notes/Bb.wav' },
  { note: 'B', path: '/assets/notes/B.wav' }
];

keys.forEach(key => key.addEventListener('click', () => playNote(key)));
dropdown.addEventListener('change', e => changeSound(pianoSounds, synthSounds, e.target.value));
button.addEventListener('click', () => showKeys());
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

const changeSound = (pianoSounds, synthSounds, preset) => {
  console.log(preset);
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

const showKeys = () => {
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