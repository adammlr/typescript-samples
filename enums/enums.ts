//string literals https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types
function getHexCode(color: 'red' | 'blue' | 'green') {
  switch (color) {
    case 'red':
      return '#FF0000';
    case 'blue':
      return '#0000FF';
    case 'green':
      return '#00FF00';
  }
}

//enums https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
enum HexColor {
  red,
  blue,
  green,
}

function getHexCodeEnum(color: HexColor) {
  switch (color) {
    case HexColor.red:
      return '#FF0000';
    case HexColor.blue:
      return '#0000FF';
    case HexColor.green:
      return '#00FF00';
  }
}

function enumDemo() {
  //const colors = { blue: 'blue' };
  getHexCode('blue');
  //or 0
  getHexCodeEnum(HexColor.green);
}
