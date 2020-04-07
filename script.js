//функция создание элемента
function createElement(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;

  return element;
}


const { body } = document;


//создали контейнер
let container = createElement('div', 'container');
body.append(container);

//создаем textarea
let textarea = createElement('textarea', 'textarea');
container.append(textarea);

//обертка для клавиш
let keyboardWrapper = createElement('div', 'keyboard-wrapper');
container.append(keyboardWrapper);

//ряды для клавиш
let line1 = createElement('div', 'line1');
keyboardWrapper.append(line1);

let line2 = createElement('div', 'line2');
keyboardWrapper.append(line2);

let line3 = createElement('div', 'line3');
keyboardWrapper.append(line3);

let line4 = createElement('div', 'line4');
keyboardWrapper.append(line4);

let line5 = createElement('div', 'line5');
keyboardWrapper.append(line5);

const eventKey = [
  ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'DEL'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', '\\', 'ENTER'],
  ['SHIFT', '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'SHIFT'],
  ['Ctrl', 'Option', 'Command', 'Space', 'Command', 'Option', '←', '↓', '→'],
];

const eventCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspase'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const charCode = [
  ['192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187', '8'],
  ['9', '81', '87', '69', '82', '84', '89', '85', '73', '79','80', '219', '221', '46'],
  ['0', '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '222', '220', '13'],
  ['16', '192', '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '16'],
  ['17', '18', '91', '32', '93', '18', '37', '40', '39']
];


for (let j = 0; j < eventKey.length; j++) {
  for (let i = 0; i < eventKey[j].length; i++) {
    
    let key = document.createElement('div');
    key.className = 'small-key';

    let backspase = eventKey[0][13];
    let del = eventKey[1][13];
    let capsLock = eventKey[2][0];
    let enter = eventKey[2][13];
    let shiftLeft = eventKey[3][0];
    let shiftRight = eventKey[3][13];
    let ctrl = eventKey[4][0];
    let optionLeft = eventKey[4][1];
    let commandLeft = eventKey[4][2];
    let commandRight = eventKey[4][4];
    let optionRight = eventKey[4][5];

    if (backspase || del || capsLock || enter || shiftLeft || shiftRight || ctrl || optionLeft || commandLeft || commandRight || optionRight) {
      key.className = 'small-key medium-key';
      }

    if (j == 4 && i == 3) {
      key.className = 'small-key large-key';
    }

    key.setAttribute('data-key', eventCode[j][i]);
    key.innerText = eventKey[j][i];
    
    if (j == 0) {
      line1.append(key);
    } else  
    if (j == 1) {
      line2.append(key);
    } else  
    if (j == 2) {
      line3.append(key);
    } else 
    if (j == 3) {
      line4.append(key);
    } else 
    if (j == 4) {
      line5.append(key);
    }
  }
}

document.addEventListener('keydown', (event) => {
  setFocus();
  let pressKey = document.querySelector(`[data-key=${event.code}]`);
  console.log(pressKey);
  pressKey.classList.add('press-key');
});



document.addEventListener('keyup', (event ) => {
  setFocus();
  let pressKey = document.querySelector(`[data-key=${event.code}]`);
  pressKey.classList.remove('press-key');
});


//функция автофокуса
function setFocus(){
  textarea.focus();
}
setFocus();


document.querySelectorAll('.keyboard-wrapper .small-key').forEach(function(element){
  
  setFocus();
  
  element.onclick = function(event){

    document.querySelectorAll('.small-key').forEach(function(element){
        element.classList.remove('press-key');
    });


    let code = this.getAttribute('data-key');
    this.classList.add('press-key');
    console.log(code);
    var textarea = document.querySelector('.textarea');
    textarea.value +=(code);
    }
});
