window.addEventListener('DOMContentLoaded', () => {
  const platform = navigator.platform.toLowerCase();
  let suggestion = '';

  if (platform.includes('win')) {
    suggestion = 'We recommend downloading Aurora Core for Windows. But lightweight for worse PCs';
  } else if (platform.includes('mac')) {
    suggestion = 'We recommend Aurora Lightweight for Mac. Does not work with Apple Silicon and PowerPC Macs.';
  } else if (platform.includes('linux')) {
    suggestion = 'Both versions are compatible with Linux.';
  } else {
    suggestion = 'Choose a version that suits your system!';
  }

  const note = document.createElement('p');
  note.textContent = suggestion;
  note.style.fontStyle = 'italic';
  note.style.marginTop = '10px';
  document.querySelector('h1').after(note);
});
