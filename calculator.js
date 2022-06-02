
const display = document.querySelector('.display');
const btnNr = document.querySelectorAll('.btnNr');
const btnEqual = document.querySelector('.btnEqual');
const clear = document.querySelector('.clear');
const delLast = document.querySelector('.delLast');
const operand = document.querySelectorAll('.operand');
const punctBtn = document.querySelector('.punctBtn');
let res = "";

console.log(typeof display)
btnNr.forEach(e=>{
  e.addEventListener("click", ()=>{
    if(display.value == "0"){
      display.value = "";
  };
  display.value += e.value;
  res += e.value;
        console.log(res);
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
  display.value = numeral(math.evaluate(display.value)).format('0[.][0000000]'); 
 if(res.slice(-1).includes(".")){
 res = res.slice(0, -1);
 };
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
      display.value = "0"
    }
});



punctBtn.addEventListener('click', ()=>{
    if(!res.includes(".")){
      res += punctBtn.value;
      display.value += punctBtn.value;
    };
  });


 const date = new Date();
        let year = date.getFullYear();
      const an = document.getElementById("an").textContent = year + " @eduardbede ";
