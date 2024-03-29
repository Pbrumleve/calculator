let numOne = '';
let numTwo = '';
let operator = '';
let answer = '';

const content = document.querySelector('.display');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', populateDisplay());
});

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
    case '.':
      populateDisplay(e.key);
      break;
    case 'Enter':
      populateDisplay('=')
      break;
    case 'Backspace':
     populateDisplay('backspace')
      break;
    case 'Escape':
      populateDisplay('clear')
      break;
    default: return;
  };
});

function populateDisplay(input) {
  const solution = document.querySelector('.solution');
  const equation = document.querySelector('.equation');
  const message = document.querySelector('.message');
  if (input === 'clear') {
    clearDisplay();
    solution.textContent = '0';
    equation.textContent = '0';
    message.textContent = '';
  } else if (input === 'backspace') {
    if (operator === '') {
      numOne = numOne.slice(0, -1);
    } else if (numTwo === '') {
      operator = '';
    } else {
      numTwo = numTwo.slice(0, -1);
    };
    equation.textContent = `${numOne} ${operator} ${numTwo}`;
  } else if (input === '=' && numOne !== '' && numTwo !== '' && operator !== '') {
    operate(numOne, numTwo, operator);
    numOne = answer;
    numTwo = '';
    operator = '';
    solution.textContent = answer;
  } else if (input === '=' && (numOne === '' || numTwo === '')) {
    message.textContent = 'Please have a number followed by an operator followed by a number chosen before clicking equals. Try again!';
    clearDisplay()
  } else {
    if (operator === '') {
      if (input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' || (input === '.' && !numOne.includes('.'))) {
        numOne += input;
      } else if (input === '+' || input === '-' || input === '*' || input === '/') {
        operator = input;
      } else {return};
    } else {
      if (input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' || (input === '.' && !numTwo.includes('.'))) {
        numTwo += input;
      } else {return};
    };
    equation.textContent = `${numOne} ${operator} ${numTwo}`;
  };
};

function operate(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  switch (operator) {
    case '+':
      answer = add(numOne, numTwo);
      break;
    case '-':
      answer = subtract(numOne, numTwo);
      break;
    case '*':
      answer = multiply(numOne, numTwo);
      break;
    case '/':
      answer = divide(numOne, numTwo);
      break;
    default:
      answer = 'ERROR';
      break;
  };
  return answer
};

function add(x, y) {
  return answer = x + y;
};

function subract(x, y) {
  return answer = x - y;
};

function multiply(x, y) {
  return answer = x * y;
};

function divide(x, y) {
  if (y === 0) {
    return console.log(`Nice try!`)
  } else {
  answer = x / y;
  return round(answer);
  }
};

function round(num) {
  let stepOne = 1000 * num;
  return Math.round(stepOne) / 1000;
};

function clearDisplay() {
  numOne = '';
  numTwo = '';
  operator = '';
  answer = '';
};