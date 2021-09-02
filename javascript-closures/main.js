function graduate(credential) {
  return function (fullName) {
    console.log(`${fullName}, ${credential}`);
  };
}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq.');
medicalSchool('Denny Min');
lawSchool('Paulerbear Park');
