window.onload = function() {
  console.log('okoko');
  let overlay = document.querySelector('#overlay');
  let body = document.body;
  overlay.classList.toggle('hidden');
  body.classList.toggle('no-scroll');
};