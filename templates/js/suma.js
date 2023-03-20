function repeat() {
    let num1, result;
    num1 = document.getElementById('inp_1').value;
    num1 = parseInt(num1);
    let num = Number(num1);

    if(num >= 5 && num <= 20){
        result = "гривень";
    }
    else if (num % 10 === 1){
        result = "гривня";
    }
    else if(num % 10 === 2 || num % 10 === 3 || num % 10 === 4){
        result = "гривні";
    }
    else{
        result = "гривень";
    }

    let out = document.querySelector("#result_repeat");
    out.innerHTML = result;
}