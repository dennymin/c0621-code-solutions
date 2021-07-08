var $contactForm = document.forms[0];
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var data = {
    name: $contactForm.elements[0].value,
    email: $contactForm.elements[1].value,
    message: $contactForm.elements[2].value
  };
  console.log(data);
  $contactForm.reset();
});
