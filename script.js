// Targets Keys
const keys = document.querySelectorAll('.key');
const white_keys = document.querySelectorAll('.key.white');
const black_keys = document.querySelectorAll('.key.black');

// Event listener to allow key to trigger playNote function
keys.forEach(key => key.addEventListener('click', () => playNotes(key)))

const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKeys = ['s', 'd', 'g', 'h', 'j'];



// Listens when key is pressed on keyboard
document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);
  // Plays key when pressed
  if (whiteKeyIndex > -1) playNotes(white_keys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNotes(black_keys[blackKeyIndex]);

  // Adds color affect to key when pressed
  key.classList.add('active');
  // Removes color effect when key is no longer pressed
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  })

})

// function to play audio of keys when pressed
function playNotes(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  // Allows for replaying current sound upon press
  noteAudio.currentTime = 0;
  // Plays key
  noteAudio.play();
  // Adds color affect to key when pressed
  key.classList.add('active');
  // Removes color effect when key is no longer pressed
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}

