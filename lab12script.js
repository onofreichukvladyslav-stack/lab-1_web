let btn2 = document.getElementById('checkBtn');
let result2 = document.getElementById('result2');


btn2.addEventListener('click', function(){
    const k = document.getElementById('k').value;
    const n = document.getElementById('n').value;

    if (!k || !n){
        result2.innerHTML = "Заповніть поля!";
        return;
    }

    let i;
    let j;

    for (i = 1; i<=n; i++){
        for (j = 1; j<=k; j++){
            result2.innerHTML += "[" + i + "," + j + "]; ";
        }
    }
});