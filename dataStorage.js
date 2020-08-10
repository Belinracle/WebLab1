document.addEventListener("DOMContentLoaded", function() {
    let storage = window.sessionStorage;
    let color = storage.getItem('color');
    document.querySelector('#form').style.background = color;
    let X = storage.getItem('X');
    let R = storage.getItem('R');
    if(window.sessionStorage.getItem('results')){
        document.querySelector('#results').innerHTML = storage.getItem('results');
    }
    document.querySelector('[name=Y]').value = storage.getItem('Y');
    document.querySelector('#point').innerHTML = storage.getItem('point');
    document.querySelectorAll("[name = X]").forEach(function (e){
        if (e.value === X) e.checked =true;
    })
    document.querySelectorAll("[name = R]").forEach(function (e){
        if (e.value === R) e.classList.add("activated");
    })
});