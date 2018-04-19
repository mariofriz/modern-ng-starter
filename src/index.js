if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode is on');
}

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ['Good morning', 'webpack'].join(' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
