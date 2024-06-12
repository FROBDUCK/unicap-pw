window.onload = function() {
    welcomeUser();
};

function welcomeUser() {
    alert("Bem-vindo à nossa página!");
}

function isEven(number) {
    return number % 2 === 0;
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

function toUpperCase(string) {
    return string.toUpperCase();
}

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function reverseArray(array) {
    return array.reverse();
}

function increaseByPercentage(value, percentage) {
    return value + (value * (percentage / 100));
}

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function toBinary(number) {
    return number.toString(2);
}

function factorial(number) {
    if (number === 0 || number === 1) return 1;
    let result = 1;
    for (let i = number; i > 1; i--) {
        result *= i;
    }
    return result;
}

function checkEvenOdd() {
    const number = document.getElementById('evenOddInput').value;
    const result = isEven(Number(number)) ? "Par" : "Ímpar";
    document.getElementById('evenOddResult').innerText = result;
}

function calculateAndDisplayAverage() {
    const input = document.getElementById('averageInput').value;
    const numbers = input.split(',').map(Number);
    const result = calculateAverage(numbers);
    document.getElementById('averageResult').innerText = `Média: ${result}`;
}

function convertToUppercase() {
    const input = document.getElementById('uppercaseInput').value;
    const result = toUpperCase(input);
    document.getElementById('uppercaseResult').innerText = result;
}

function checkPrime() {
    const number = document.getElementById('primeInput').value;
    const result = isPrime(Number(number)) ? "Primo" : "Não Primo";
    document.getElementById('primeResult').innerText = result;
}

function reverseAndDisplayArray() {
    const input = document.getElementById('reverseArrayInput').value;
    const array = input.split(',');
    const result = reverseArray(array);
    document.getElementById('reverseArrayResult').innerText = `Invertido: ${result.join(', ')}`;
}

function increaseValueByPercentage() {
    const value = Number(document.getElementById('valueInput').value);
    const percentage = Number(document.getElementById('percentageInput').value);
    const result = increaseByPercentage(value, percentage);
    document.getElementById('percentageResult').innerText = `Resultado: ${result}`;
}

function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const result = isPalindrome(input) ? "Palíndromo" : "Não Palíndromo";
    document.getElementById('palindromeResult').innerText = result;
}

function convertToBinary() {
    const number = document.getElementById('binaryInput').value;
    const result = toBinary(Number(number));
    document.getElementById('binaryResult').innerText = `Binário: ${result}`;
}

function calculateFactorial() {
    const number = document.getElementById('factorialInput').value;
    const result = factorial(Number(number));
    document.getElementById('factorialResult').innerText = `Fatorial: ${result}`;
}