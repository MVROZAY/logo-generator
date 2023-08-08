// index.js

const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function generateLogo() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: input => /^[a-zA-Z]{1,3}$/.test(input),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);

  let shape;

  switch (userInput.shape) {
    case 'Circle':
      shape = new Circle(userInput.shapeColor);
      break;
    case 'Triangle':
      shape = new Triangle(userInput.shapeColor);
      break;
    case 'Square':
      shape = new Square(userInput.shapeColor);
      break;
    default:
      console.error('Invalid shape selection.');
      return;
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="180" text-anchor="middle" fill="${userInput.textColor}">
        ${userInput.text}
      </text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

generateLogo();
