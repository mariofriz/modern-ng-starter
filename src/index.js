import printMe from './print.js'

if (process.env !== 'production') {
  console.log('Development mode is on');
}

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ['Good morning', 'webpack'].join(' ');
  element.classList.add('hello');

  element.onclick = printMe;

  return element;
}

document.body.appendChild(component());
