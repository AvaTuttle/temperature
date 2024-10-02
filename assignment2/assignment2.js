const temperatureInput = document.getElementById("temperatureInput");
const resultElement = document.getElementById("result");
const convertButton = document.getElementById("convertButton");

// Add an event listener to the button
convertButton.addEventListener("click", () => {
    // Get the temperature in Celsius from the input
    let temperatureCelsius = parseFloat(temperatureInput.value);

        // Convert Celsius to Fahrenheit
        let temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;

        console.log("Temperature in Fahrenheit: " + temperatureFahrenheit);

        resultElement.innerText = `Temperature in Fahrenheit: ${temperatureFahrenheit.toFixed(2)}`;    
});
