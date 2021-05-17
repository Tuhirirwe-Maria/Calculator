// assign varriables
const input = document.querySelector('#input');
const buttons = document.querySelectorAll('button');
const buttonsSection = document.querySelector('#buttons');
const equal = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear_input');

// put an EventListener for each button
buttons.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        input.value = `${input.value}${event.target.innerText}`;
    })
});
// console.log(buttons);

// Event listener for the eQual sign 
equal.addEventListener('click', ()=>{
    calculate();
});

// calculate
function calculate(){
    let valueArray = input.value.split("");
    let index;
let regex = /[-+*/]/;
let operator = null;

if(regex.test(valueArray.join(""))){
    operator = valueArray.join("").match(regex)[0];
}


switch(operator){
    case "+":
        // do this if the symbol is "+" (plus)
        index = valueArray.indexOf("+");
        input.value = (parseFloat(valueArray.slice(0,index).join("")) + parseFloat(valueArray.slice(index+1).join(""))); 
        break;

    case "-":
        // do this when the symbol is "-" (minus)
        index = valueArray.indexOf("-");
        input.value = (parseFloat(valueArray.slice(0,index).join("")) - parseFloat(valueArray.slice(index+1).join("")));
        break;

    case "*":
        // do this when the symbol is "*" (multiply)
        index = valueArray.indexOf("*");
        input.value = (parseFloat(valueArray.slice(0,index).join("")) * parseFloat(valueArray.slice(index+1).join("")));
        break;

    case "/":
        // do this when the symbol is "/" (Divide)
        index = valueArray.indexOf("/");
        input.value = (parseFloat(valueArray.slice(0,index).join("")) / parseFloat(valueArray.slice(index+1).join("")));
        break;

        default:
            input.value = parseFloat(valueArray.join(''));
}

// clear the display to receive new input
clearBtn.addEventListener('click',()=>{
    input.value = "";
    input.focus();
})
}