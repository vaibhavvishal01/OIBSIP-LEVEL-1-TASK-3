alert('Temperature Converter App Welcome You');

function temperatureConverter(value) {
    const inputCelsius = parseFloat(value);

    const fahrenheitRadio = document.querySelector('.far');
    const kelvinRadio = document.querySelector('.kel');

    const resultElement = document.getElementById('conversionResult');

    if (fahrenheitRadio.checked) {
        const fahrenheit = (inputCelsius * 9 / 5) + 32;
        resultElement.textContent = `${fahrenheit.toFixed(2)}°F`;
    } else if (kelvinRadio.checked) {
        const kelvin = inputCelsius + 273.15;
        resultElement.textContent = `${kelvin.toFixed(2)}K`;
    }
}

