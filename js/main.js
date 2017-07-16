function doFirst(){
    myBtn = document.getElementById('myBtn');
    myBtn.addEventListener('click', func, false);
}

function func(){
    alert('JS came back!');
}

window.addEventListener('load', doFirst, false);
