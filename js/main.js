import { lead, bass, pad, chaos } from './sounds.js';
import { keys, whiteKeys, blackKeys, whiteKeyboard, blackKeyboard, dropdown, button } from './elements.js';
import playNote from './playnote.js';
import changeSound from './changesound.js';

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