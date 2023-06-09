const svgFile = document.querySelector('svg');
let buttonChange = document.querySelector('button');
var inputVal = document.getElementById("myInput");

function textChange () {
        let v = inputVal.value;
        const iD = svgFile.getElementById(v);
        let val = Math.floor(Math.random() * 1000);
        iD.textContent = val;
}

function inp () {
    setInterval (textChange, 1000);
}

buttonChange.addEventListener('click', inp);