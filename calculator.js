
const display = document.querySelector('.display');
const btnNr = document.querySelectorAll('.btnNr');
const btnEqual = document.querySelector('.btnEqual');
const clear = document.querySelector('.clear');
const delLast = document.querySelector('.delLast');
const operand = document.querySelectorAll('.operand');
const punctBtn = document.querySelector('.punctBtn');

const date = new Date();
let year = date.getFullYear();
const an = document.getElementById("an").textContent = year + " @eduardbede ";

let res = "";


btnNr.forEach(e=>{
  e.addEventListener("click", ()=>{
    if(display.value == "0"){
      display.value = "";
  };
  display.value += e.value;
  res += e.value;
  });
});

operand.forEach(evt=>{
  evt.addEventListener('click', ()=>{
    let char = ["+", "-", "*", "/", "*", "%", "^"];
    if(!char.includes(display.value.slice(-1))){
      display.value += evt.value;
    } if(char.includes(display.value.slice(-1))){
      display.value = display.value.slice(0, -1) + evt.value;
      res = '';
    }
   
 });
});
function result(){

  btnEqual.addEventListener('click', ()=>{
   if(res.slice(-1).includes(".")){
     res = "0";
 } display.value = numeral(math.evaluate(display.value)).format('0[.][0000000]'); 
});
};
result();

clear.addEventListener('click', ()=>{
res = '0';
display.value = res;
});

delLast.addEventListener('click', ()=>{
    display.value = display.value.slice(0,-1);
    if(display.value == ""){
      display.value = "0";
    };
});

punctBtn.addEventListener('click', ()=>{
    if(!res.includes(".")){
      res += punctBtn.value;
      display.value += punctBtn.value;
    };
  });