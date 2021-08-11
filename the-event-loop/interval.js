let counter = 3;
const counting = setInterval(function () {
  if (counter < 0) {
    clearInterval(counting);
    console.log('Blast off!');
    return;
  }
  console.log(counter);
  counter--;

}, 1000);
