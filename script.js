// input 
const inputPasswordLength = document.getElementById("passwordLength");
const inputPasswordResult = document.getElementById("passwordResult");
const progress = document.getElementById("progress");

// button
const buttonOperator = document.querySelectorAll(".action");

buttonOperator.forEach(button => {

    button.addEventListener("click", (event) => {

        let passwordLength = inputPasswordLength.value; 

        // addition
        if (event.target.id == "buttonAdd") {   
            if (passwordLength < 20) {
                inputPasswordLength.value = Number(passwordLength) + 1;
            };
        };

        // subtraction
        if (event.target.id == "buttonSub") {
            if (passwordLength > 0) {
                inputPasswordLength.value = Number(passwordLength) - 1;
            };
        };

        if (event.target.id == "buttonGen") {

            // checkbox
            const checkUpperCases = document.getElementById("upperCases").checked;
            const checkSpecialCharacteres = document.getElementById("specialCharacteres").checked;
            const checkNumber = document.getElementById("number").checked;

            let chars = "abcdefghijklmnopqrstuvwxyz";
            let specialChars = "!@#$%^&*()+?><:{}[]";
            let number = "0123456789";

            if (passwordLength == 0) {
                return;
            };
            if (checkUpperCases) {
                chars = chars + chars.toUpperCase();
            };
            if (checkSpecialCharacteres) {
                chars = chars + specialChars;
            };
            if (checkNumber) {
                chars = chars + number;
            };

            let password = "";

            for (let i = 0; i < passwordLength; i++) {
                let randomNumber = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomNumber, randomNumber + 1);
            };
            
            inputPasswordResult.value = password;
        };
    });
});