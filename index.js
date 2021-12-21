const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const tempresult = document.querySelector('.temp-result');
const numbers1 = document.querySelectorAll('.number');
const operation1 = document.querySelectorAll('.operation');
const equal1 = document.querySelector('.equal');
const clearall1 = document.querySelector('.all-clear');
const clearlast1 = document.querySelector('.last-clear');

let disnum1 = '';
let disnum2 = '';
let result = null;
let lastoperation = '';
let havedot = false;

numbers1.forEach(number => {
number.addEventListener('click', (e)=> {
if(e.target.innerText === '.' && !havedot){
    havedot = true;
}else if(e.target.innerText === '.' && havedot){
  return;
}
 disnum2 += e.target.innerText;
 display2.innerText = disnum2;
    })
});

operation1.forEach(operation => {
    operation.addEventListener('click', (e)=> {
        if(!disnum2) result;
        havedot = false;
        const operationname = e.target.innerText;
        if(disnum1 && disnum2 && lastoperation){
            mathOperation();
        }else {
            result = parseFloat(disnum2);
        }
        clearvar(operationname);
        lastoperation = operationname;
        console.log(result);
    })
});

function clearvar(name = ''){
    disnum1 += disnum2+ '' + name + '';
    display1.innerText = disnum1;
    display2.innerText = '';
    disnum2 = '';
    tempresult.innerText = result;
}

function mathOperation(){
    if(lastoperation === 'x'){
        result = parseFloat(result) * parseFloat(disnum2);
    }else if(lastoperation === '+'){
        result = parseFloat(result) + parseFloat(disnum2);      
    }
    else if(lastoperation === '-'){
        result = parseFloat(result) - parseFloat(disnum2);      
    }
    else if(lastoperation === '/'){
        result = parseFloat(result) / parseFloat(disnum2);      
    }
    else if(lastoperation === '%'){
        result = parseFloat(result) % parseFloat(disnum2);      
    }
    
}

equal1.addEventListener('click', (e)=> {
    if(!disnum1 || !disnum2) return;
    havedot = false;
    mathOperation();
    clearvar();
    display2.innerText = result;
    tempresult.innerText = '';
    disnum2 = result;
    disnum1 = '';
})

clearall1.addEventListener('click', (e)=> {
    display1.innerText = '0';
    display2.innerText = '0';
    disnum1 = '';
    disnum2 = '';
    result = '';
    tempresult.innerText = '0';
})

clearlast1.addEventListener('click',(e)=> {
    display2.innerText = '';
    disnum2 = '';
});

window.addEventListener('keydown', (e)=> {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
    ){
        clickButton(e.key);
    }
     else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%' 

    ){
        clickoperation(e.key);
    }else if(e.key === '*'){
        clickoperation('x')
    }else if(e.key == 'Enter' || e.key === '='){
        clickequal();
    }
});

 function clickButton(key){
     numbers1.forEach(button => {
         if(button.innerText === key){
             button.click();
         }
     })
 }

  function clickoperation(key){
      operation1.forEach(button => {
          if(button.innerText === key){
              button.click();
          }
      });
  }

  function clickequal(){
      equal1.click();
  }