function getValue(){
    let tacoValue = document.getElementById("tacoWord").value.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]|\s/gi, '').replace(/[0-9]/g, '');
    
    if (tacoValue.length > 1) {
        finalTaco = isThisTaco(tacoValue);
        displayTaco(finalTaco);
    }
    else{
        alert("Please enter a string with more than one letter.")
    }
}

function isThisTaco(tacoValue){
    finalTaco = ""
    for (let index = tacoValue.length - 1; index >= 0; index--) {
        finalTaco += tacoValue[index];
    }

    if (finalTaco == tacoValue){
        return true;
    }
    else if (finalTaco != tacoValue){
        return false;
    }
}

function displayTaco(finalTaco){
    let upperTaco = document.getElementById("tacoWord").value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]|\s/gi, '').replace(/[0-9]/g, '').split("").reverse().join("");
    if(finalTaco == true){
        document.getElementById("res").classList.remove("invisible");
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("alert_text").innerHTML = `${upperTaco} is a palindrome!`
        document.getElementById("alert").classList.remove("invisible");
    }
    else{
        document.getElementById("res").classList.remove("invisible");
        document.getElementById("alert").classList.remove("alert-success");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("alert_text").innerHTML = `${upperTaco} is NOT a palindrome!`
        document.getElementById("alert").classList.remove("invisible");
    }
    
}

