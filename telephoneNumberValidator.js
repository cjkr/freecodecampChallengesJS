// This function validates the telephone string and returns true if valid

function telephoneCheck(str) {
  let validRegex = /^1?(\s*|-?)(\d{3}|\(\d{3}\))(\s*|-?)?\d{3}(\s*|-?)?\d{4}$/;
  return validRegex.test(str);
}

telephoneCheck("555-555-5555");
