'use strict';
let Rvalues = document.querySelectorAll('[name=R]');
let Xvalues =  document.querySelectorAll('[name=X]');
let point = document.querySelector('#point')
let results = document.querySelector('#results');
let storage = window.sessionStorage;
document.querySelector('#sendButton').addEventListener('click',function(){
    let color = window.getComputedStyle(document.querySelector('#form')).backgroundColor;
    if (color === 'rgb(0, 153, 0)')
    {
        let X = getXvalue();
        let Y = filterFloat(document.querySelector('[name=Y]').value.replace(",",".").trim());
        let R = getRvalue();
        let data = 'X='+encodeURIComponent(X) + '&Y='+ encodeURIComponent(Y)+ '&R='+encodeURIComponent(R);
        let request = new XMLHttpRequest();
        request.open('POST','server.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        request.addEventListener("readystatechange", () =>  {
            if (request.readyState === 4 && request.status === 200) {
                results.innerHTML+=request.responseText;
                storage.setItem('results',results.innerHTML);
                if(request.responseText.includes('not hited')){
                    resetPoint();
                }
                else {
                    setPoint(X, Y, R);
                }
            }
        });
        request.send(data);
    }
});
function getXvalue(){
    for (let i = 0;i<Xvalues.length;i++)
        if (Xvalues[i].checked===true)
            return Xvalues[i].getAttribute('value');
}
function filterFloat(value) {
    if (value.length>14) return 'NaN';
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?)$/
      .test(value))
      return Number(value);
  return 'NaN';
}
function getRvalue(){
    for (let i = 0 ; i<Rvalues.length; i++){
        if (Rvalues[i].classList.contains('activated'))
            return Rvalues[i].getAttribute('value');
    }
}
document.querySelector('#clearButton').addEventListener('click',function() {
    document.querySelector('#results').innerHTML = '<tr><th>X</th><th>Y</th><th>R</th><th>Current Time</th><th>Execution Time</th><th>Result</th></tr>';
    window.sessionStorage.setItem('results','<tr><th>X</th><th>Y</th><th>R</th><th>Current Time</th><th>Execution Time</th><th>Result</th></tr>');
    point.innerHTML='';
});
function setPoint(x,y,r){
    let cx = 250 + x/r*200;
    let cy = 250 - y/r*200;
    resetPoint();
    point.innerHTML='<circle class="new" r="2" cx="'+cx+'" cy="'+cy+'" />';
    storage.setItem('point','<circle class="new" r="2" cx="'+cx+'" cy="'+cy+'" />')
}
function resetPoint(){
    point.innerHTML='';
}