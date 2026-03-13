function factorial(n){
    let res = 1;
    let i;
    for (i = 1; i<=n; i++) {
        res*=i;
    }

    return res;
}

let btn3 = document.getElementById('calcBtn');
let result3 = document.getElementById('result3');

btn3.addEventListener('click', function(){
    let n = document.getElementById('val').value;
    let res = factorial(n);
    result3.innerHTML += "Факторіал числа " + n + " дорівнює " + res;  
});


