'use strict';

//getting message, using class name
console.log(document.querySelector('.message').textContent);
//actual score, usinf id
console.log(
  `Actual ${document.querySelector('#labelScore').textContent.trim().slice(3)}`
);

/*DOM >> Document Object Model, Structed Represtation of HTML Documents allows JAVASCRIPT to
     access ELEMENTS and STYLES to MANIPULATES THEM. 
     
 DOM methods and properties are for DOM, NOT for JS  
   But, Using Web APIs JS communicates DOM methods and properties. 
     
     */
//Updating Elemenets message
document.querySelector('.message').textContent = 'Guess a number';

//enter and getting number
document.querySelector('.number').textContent = '??';
//document.querySelector('.guess').value = 30;
if (typeof document.querySelector('.guess').value !== 'number') {
  console.log(`Entered value: ${document.querySelector('.guess').value}`);
} else {
  console.log('Not Value Present there!');
}

//Adding Events(onclick) to check actions
/* Events, things that happen
COMMOM HTML EVENTS:

onclick
onchange
onmouseover
ommouseout
onkeydown
onload */

document.querySelector('.check').addEventListener('click', function () {
  console.log(
    `checking value on click: ${document.querySelector('.guess').value}`
  );
  if (
    document.querySelector('.guess').value ==
    document.querySelector('.score').textContent
  ) {
    //prompt('Correct Value');
    alert('Correct Value');
    console.log(`Correct Value`);
    document.querySelector('.number').textContent = 'Great! Correct Number! 😊';
    document.querySelector('body').style.backgroundColor = '#001CC8';
  } else {
    let alerttMessage2 = alert('InCorrect Value');
    console.log(`InCorrect Value`);
    document.querySelector('.number').textContent =
      'Oops! Incorrect Number! 🥺';
    document.querySelector('body').style.backgroundColor = '#FF3326FF';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
  console.log('Page Reloaded');
});

//option 1 Click
document.querySelector('.optionClick1').addEventListener('click', () => {
  alert('Enter Value 19');
});

//option 2Click
document.querySelector('.optionClick2').addEventListener('click', () => {
  alert('Enter Value 20');
});

//all btns
const btnsOptionsClick = document.querySelectorAll('.hidden');
console.log(btnsOptionsClick);

for (let i = 0; i < btnsOptionsClick.length; i++)
  console.log(btnsOptionsClick[i].textContent);
