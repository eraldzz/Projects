const inputValue = document.getElementById("inputValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

function generatePassword(){

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numberChars = '1234567890';
    let allCharSet = '';
    let password = '';
    const length = Number(inputValue.value.trim());

    allCharSet += uppercase.checked ? uppercaseChars : '';
    allCharSet += lowercase.checked ? lowercaseChars : '';
    allCharSet += symbols.checked ? symbolChars : '';
    allCharSet += numbers.checked ? numberChars : '';

    if (allCharSet.length === 0){
        password = 'Please select at least one character type!';
    }

    else if(length > 32 || length < 12){
        password = 'Enter a valid number between 12 and 32!';
    }

    else{
        for(let i=0; i < length; i++){
           const randomIndex = Math.floor(Math.random() * allCharSet.length);
           password += allCharSet[randomIndex]
        }
    }



    result.textContent = password;


}

generateBtn.addEventListener("click", generatePassword);