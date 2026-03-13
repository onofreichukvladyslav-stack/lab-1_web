let btn = document.getElementById('btnCheck');
let result = document.getElementById('result');

btn.addEventListener('click', function(){
    const numbers = document.getElementById('numbers').value;
    const digits = document.getElementById('digits').value.trim();

    if (!numbers || !digits){
        result.innerHTML = "Заповніть поля!";
        return;
    }

    let count = 0;

    for (let char of numbers){
        if (char === digits){
            count++;
        }
    }

    result.innerHTML = "Число " + digits + " зустрічається " + count + " раз(ів).";
});
