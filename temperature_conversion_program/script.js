let inputValue = document.getElementById("inputValue");
let CtoF = document.getElementById("CtoF");
let FtoC = document.getElementById("FtoC");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

function convertTemperature(){

    let numberValue = Number(inputValue.value);
    let resultText = "";

    if(isNaN(numberValue)){
        resultText = "Please enter a valid Number";
        return;
    }

    if(CtoF.checked){
        
        let Fahrenheit = (9/5 * numberValue) + 32;
        resultText = `${Fahrenheit.toFixed(1)} °F`;
    }
    else if(FtoC.checked){
        let Celsius = (numberValue - 32) * 5/9;
        resultText = `${Celsius.toFixed(1)}  °C`;
    }
    else{
        resultText = "Please select a conversion option!";
    }

    result.textContent = resultText;
}

submitBtn.onclick = convertTemperature;