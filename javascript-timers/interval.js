var header = document.querySelector('h1');
var special = ['4', '3', '2', '1', '~Earth Beeeeloooww Us ~'];
var counter = 0;
function countDown() {
  header.textContent = special[counter];
  counter++;
  if (counter === special.length) {
    clearInterval(intervalID);
  }
}
var intervalID = setInterval(countDown, 1000);
