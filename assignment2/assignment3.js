document.getElementById("convertButton").addEventListener("click", function() {
    let temperatureInput = document.getElementById("temperatureInput").value;
    let unit = temperatureInput.slice(-1).toUpperCase(); // Get the last character (C or F)
    let temperature = parseFloat(temperatureInput);

    if (!isNaN(temperature)) {
        if (unit === "C") {
            // Convert Celsius to Fahrenheit
            let fahrenheit = (temperature * 9/5) + 32;
            document.getElementById("result").textContent = `Temperature: ${fahrenheit.toFixed(2)} °F`;
        } else if (unit === "F") {
            // Convert Fahrenheit to Celsius
            let celsius = (temperature - 32) * 5/9;
            document.getElementById("result").textContent = `Temperature: ${celsius.toFixed(2)} °C`;
        } else {
            document.getElementById("result").textContent = "Please enter a temperature followed by 'C' or 'F'.";
        }
    } else {
        document.getElementById("result").textContent = "Please enter a valid number followed by 'C' or 'F'.";
    }
});

