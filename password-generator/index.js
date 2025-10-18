const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
const numbersCheckbox = document.getElementById('numbersCheckbox');
const symbolsCheckbox = document.getElementById('symbolsCheckbox');
const Output = document.getElementById('Output');



function generatePassword(passwordLength) {

    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "1234567890"
    const symbols = "!@#$%?()+-=&^*_"

    let allowedChars = "";
    let password = "";

    if(lowercaseCheckbox.checked) allowedChars += lowercase
    if(uppercaseCheckbox.checked) allowedChars += uppercase
    if(symbolsCheckbox.checked) allowedChars += symbols
    if(numbersCheckbox.checked) allowedChars += numbers

    for(let i=0;i<passwordLength;i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length)
        password = password + allowedChars[randomIndex];
    }

    document.getElementById('output').textContent = password;

}


