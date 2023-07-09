const fahrenheitInput = document.getElementById('fahrenheit');
const celsiusInput = document.getElementById('celcius');
const convertButton = document.getElementById('convert');
const clearButton = document.getElementById('clear');


convertButton.addEventListener('click', convertTemperature);
clearButton.addEventListener('click', clearInputs);

function convertTemperature() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = parseFloat(celsiusInput.value);
    

    if (!isNaN(fahrenheitValue)) {
        const celsiusResult = (fahrenheitValue - 32) * 5 / 9;
        celsiusInput.value = celsiusResult.toFixed(2);
    }
    
    
    if (!isNaN(celsiusValue)) {
        const fahrenheitResult = (celsiusValue * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheitResult.toFixed(2);
    }
}


function clearInputs() {
    fahrenheitInput.value = '';
    celsiusInput.value = '';
}
