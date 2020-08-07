var inputs = document.querySelectorAll("[name = X]");
var buttons = document.querySelectorAll('[name=R]');
var textField = document.querySelector('[name=Y]');
var form = document.querySelector('#form');
document.querySelector('[name=Y]').addEventListener('input',isValid);
for (var i = 0; i < inputs.length; i++){
    inputs[i].onchange = checkboxHandler;
    inputs[i].addEventListener('click', isValid);
}
    function checkboxHandler(e) {
        for (var i = 0; i < inputs.length; i++)
            if (inputs[i].checked && inputs[i] !== this)
                inputs[i].checked = false;
    }
        
for (var i = 0 ; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        if ( this.classList.contains('activated'))
            this.classList.remove("activated");
        else
            this.classList.add("activated");
    for (var b =0;b<buttons.length; b++){
        if(buttons[b].classList.contains('activated') && buttons[b] !== this){
            buttons[b].classList.remove("activated");
        }
    }
});
    buttons[i].addEventListener('click', isValid);
}

function isValid(){
    if(checkboxes()&&butts()&&text())
        form.style.background = 'rgb(0, 255, 0)';
    else 
        form.style.background = 'rgb(255,24,24)';
}
function checkboxes(){
    var okay = false;
    for (var i = 0; i < inputs.length; i++)
        if (inputs[i].checked) 
            okay = true;
    return okay;
}
function butts(){
    var okay = false;
    for (var i = 0; i < buttons.length; i++)
        if (buttons[i].classList.contains('activated')) 
            okay = true;
    return okay;
}
function text(){
    var num = filterFloat(textField.value.replace(",",".").trim());
    
    if (num!=='NaN'){
        if (num>=-5&&num<=3)return true;
        else return false;
    }
    else return false;
}
var filterFloat = function (value) {
    if (value.length>14) return 'NaN';
    if(/^(-|\+)?([0-9]+(\.[0-9]+)?)$/
      .test(value))
      return Number(value);
  return 'NaN';
};