//console.log("blabla bla bla bla");
//accept the arguments that we need
//color
//hue
//import a library to generate the random colors

//specify the output
//something that will launch the program

var randomColor = require("randomcolor");
let lum = process.argv[2];
let col = process.argv[3];
var color = randomColor({
  luminosity: lum,
  hue: col
});
console.log(color);

const Text = "******";
const chalk = require("chalk");

console.log(chalk.hex(color)(Text));

function lineGen() {
  let line = "";
  for (j = 0; j < 31; j++) {
    line += "#";
  }
  return line;
}

for (i = 0; i < 5; i++) {
  console.log(chalk.hex(color)(lineGen()));
}

const halfline = "##########  ";
console.log(chalk.hex(color)(halfline + "         " + halfline));
console.log(chalk.hex(color)(halfline + color + "  " + halfline));
console.log(chalk.hex(color)(halfline + "         " + halfline));
for (i = 0; i < 5; i++) {
  console.log(chalk.hex(color)(lineGen()));
}
