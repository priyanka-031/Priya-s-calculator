
const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempResultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearAllE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.last-entity-clear');

let dis1num = '';
let dis2num  = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersE1.forEach( number => {
    number.addEventListener('click',(e)=> {
        if(e.target.innerText ==='.'&& !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2num += e.target.innerText;
        display2E1.innerText = dis2num;

    })
});
operationE1.forEach( operation => {
    operation.addEventListener('click',(e)=>{
        if(!dis2num) result;
        haveDot= false;
        const operationName = e.target.innerText;
        if(dis1num && dis2num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(dis2num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = ''){
    dis1num += dis2num+ '' + name + '';
    display1E1.innerText = dis1num;
    display2E1.innerText = '';
    dis2num = '';
    tempResultE1.innerText = result;
}

function mathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2num);
    } else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2num);
    } else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2num);
    } else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2num);
    } else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2num);
    } 
}    
   equalE1.addEventListener('click',(e)=>{
    if( !dis1num || !dis2num ) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    tempResultE1.innerText = '';
    dis2num = result;
    dis1num='';
   })

   clearAllE1.addEventListener('click',(e)=> {
    display1E1.innerText = '0';
    display2E1.innerText = '0';
    result = '';
    tempResultE1.innerText = '0';
   });


   clearLastE1.addEventListener('click',(e) => {
    display2E1.innerText ='';
    dis2num = '';
   });

   window.addEventListener('keydown', (e) => {
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
clickButtonE1(e.key);
         }else if(
            e.key === '+' ||
            e.key === '-' ||
            e.key === '%' 
         ){
            clickOperation(e.key);
         }else if(e.key === "*"){
            clickOperation('X');
         }else if(e.key =='Enter' || e.key ==="="){
            clickEqual();
         }
   });

   function clickButtonE1(key){
    numbersE1.forEach( button => {
        if(button.innerText === key ){
            button.click();
        }

    })
   }
function clickOperation(key){
    operationE1.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}

function clickEqual(){
    equalE1.click();
}