const open = document.getElementById('open');
const oh_container = document.getElementById('oh_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  oh_container.classList.add('show');
});

close.addEventListener('click', () => {
  oh_container.classList.remove('show');
});
