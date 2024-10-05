document.getElementById("convertButton").addEventListener("click", function() {
    let celsius = parseFloat(document.getElementById("temperatureInput").value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").textContent = `Temperature: ${fahrenheit.toFixed(2)} °F`;

       // Change background based on temperature
if (celsius <= 0) {
    document.body.style.backgroundImage = "url('img/snow.jpg')"; // Cold
} else if (celsius > 0 && celsius <= 20) {
    document.body.style.backgroundImage = "url('img/warm.jpg')"; // Mild
} else {
    document.body.style.backgroundImage = "url('img/hot.jpg')"; // Hot
}

    } else {
        document.getElementById("result").textContent = "Please enter a valid number.";
    }
});
