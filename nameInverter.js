const nameInverter = function (name) {
  if (name === undefined) {
    throw 'Error';
  }

  let newStr = name.trim();
  let reg = /[a-zA-Z]/;
  let honorArray = ['Mr.', 'Mrs.', 'Ms.', 'Dr.']



  if (newStr === '') {
    return '';
  }
  if (honorArray.includes(newStr) && newStr.length < 4) {
    return "";
  }

  let nameInverted = newStr.split(" ");
  if (honorArray.includes(nameInverted[0]) && nameInverted.length < 3) {
    return nameInverted.join(" ")
  }

  if (honorArray.includes(nameInverted[0]) && nameInverted.length >= 3) {
    return nameInverted[0] + " " + nameInverted[2] + ", " + nameInverted[1];
  } else {
    let nameFinal = nameInverted.reverse("").join(", ");
    return nameFinal;
  }
}


module.exports = nameInverter;


