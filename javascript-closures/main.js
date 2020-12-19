function graduate(credential) {
  return function name(fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Jazzmine');
lawSchool('Jazzmine');
