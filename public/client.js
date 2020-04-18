console.log('Client-side code running');
let count = 0;
const button = document.getElementById('countBtn');
setValue(count);
button.addEventListener('click', function(e) {
  count++;
  setValue(count);
  console.log('button was clicked', count);
});

function setValue(count) {
  document.getElementById('counter').innerText = count;
}