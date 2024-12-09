function convertTemperature() {
    const tempInput = document.getElementById("temperatureInput");
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");
  
    const temperature = parseFloat(tempInput.value);
  
    // Validate input
    if (isNaN(temperature)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    let convertedTemp, targetUnit;
  
    // Conversion logic
    switch (unit) {
      case "Celsius":
        convertedTemp = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        targetUnit = "Fahrenheit";
        break;
      case "Fahrenheit":
        convertedTemp = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        targetUnit = "Celsius";
        break;
      case "Kelvin":
        convertedTemp = temperature - 273.15; // Kelvin to Celsius
        targetUnit = "Celsius";
        break;
    }
  
    // Display result
    resultDiv.textContent = `${temperature}° ${unit} is ${convertedTemp.toFixed(2)}° ${targetUnit}`;
  }
  