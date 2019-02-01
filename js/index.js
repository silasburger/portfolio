window.onload = function() {
  let overlay = document.querySelector('#overlay');
  let body = document.body;
  overlay.classList.toggle('hidden');
  body.classList.toggle('no-scroll');

  window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
};