'use strict';
document.querySelector('#sendButton').addEventListener('click',function(){
    var color = window.getComputedStyle(document.querySelector('#form')).backgroundColor;
    if (color === 'rgb(0, 255, 0)')
    {
        var X = getXvalue();
        var Y = filterFloat(document.querySelector('[name=Y]').value.replace(",",".").trim());
        var R = getRvalue();
        var data = 'X='+encodeURIComponent(X) + '&Y='+ encodeURIComponent(Y)+ '&R='+encodeURIComponent(R);
        var request = new XMLHttpRequest();
        request.open('POST','server.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        request.addEventListener("readystatechange", () =>  {
            if (request.readyState === 4 && request.status === 200) {
                document.querySelector('#results').innerHTML+=request.responseText;
            }
        });
        request.send(data);
    }
});
function getXvalue(){
    var Xvalues =  document.querySelectorAll('[name=X]');
    for (var i = 0;i<Xvalues.length;i++)
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
    var Rvalues = document.querySelectorAll('[name=R]');
    for (var i = 0 ; i<Rvalues.length; i++){
        if (Rvalues[i].classList.contains('activated'))
            return Rvalues[i].getAttribute('value');
    }
}
document.querySelector('#clearButton').addEventListener('click',function() {
    document.querySelector('#results').innerHTML = '<tr><th>X</th><th>Y</th><th>R</th><th>Current Time</th><th>Execution Time</th><th>Result</th></tr>';
});