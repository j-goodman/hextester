window.onload = function () {
  var textbox = document.getElementById('textbox');
  textbox.value = '#000000';
  document.body.style.background = textbox.value;
};

document.onkeyup = function () {
  document.body.style.background = textbox.value;
  var r = parseInt(textbox.value.slice(1,3), 16);
  var g = parseInt(textbox.value.slice(3,5), 16);
  var b = parseInt(textbox.value.slice(5,7), 16);
  if (parseInt((r+g+b)/3) < 40) {
    textbox.className = 'white';
  } else {
    textbox.className = 'black';
  }
};
