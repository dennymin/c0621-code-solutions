var uList = document.getElementById('user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', doStuff);
function doStuff() {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var userName = document.createElement('li');
    userName.textContent = xhr.response[i].name;
    uList.appendChild(userName);
  }
}
xhr.send();
