let inputs = document.querySelectorAll("[name = X]");
let buttons = document.querySelectorAll('[name=R]').for;
let textField = document.querySelector('[name=Y]');
let form = document.querySelector('#form');
document.querySelector('[name=Y]').addEventListener('input',isValid);
for (let i = 0; i < inputs.length; i++){
    inputs[i].onchange = checkboxHandler;
    inputs[i].addEventListener('click', isValid);
}
function checkboxHandler(e) {
    for (let i = 0; i < inputs.length; i++)
        if (inputs[i].checked && inputs[i] !== this)
            inputs[i].checked = false;
}
        
for (let i = 0 ; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        if ( this.classList.contains('activated'))
            this.classList.remove("activated");
        else
            this.classList.add("activated");
    for (let b =0;b<buttons.length; b++){
        if(buttons[b].classList.contains('activated') && buttons[b] !== this){
            buttons[b].classList.remove("activated");
        }
    }
});
    buttons[i].addEventListener('click', isValid);
}

function isValid(){
    if(checkboxes()&&butts()&&text())
        form.style.background = 'rgb(0,153,0)';
    else 
        form.style.background = 'rgb(197,29,52)';
}
function checkboxes(){
    let okay = false;
    for (let i = 0; i < inputs.length; i++)
        if (inputs[i].checked) 
            okay = true;
    return okay;
}
function butts(){
    let okay = false;
    for (let i = 0; i < buttons.length; i++)
        if (buttons[i].classList.contains('activated')) 
            okay = true;
    return okay;
}
function text(){
    let num = filterFloat(textField.value.replace(",",".").trim());
    if (num!=='NaN'){
        if (num>=-5&&num<=3)return true;
        else return false;
    }
    else return false;
}
let filterFloat = function (value) {
    if (value.length>14) return 'NaN';
    if(/^(-|\+)?([0-9]+(\.[0-9]+)?)$/
      .test(value))
      return Number(value);
  return 'NaN';
};