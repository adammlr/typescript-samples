function getHexCode(color) {
  switch (color) {
    case 'red':
      return '#FF0000';
    case 'blue':
      return '#0000FF';
    case 'green':
      return '#00FF00';
    default:
      throw new Error('Unkown color');
  }
}

function enumDemo() {
  getHexCode('red');
}
