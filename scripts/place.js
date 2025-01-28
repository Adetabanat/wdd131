// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula in Fahrenheit
    return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Static values for weather data (can later be replaced by dynamic data)
const temperature = 32; // in °F
const windSpeed = 10; // in mph
const condition = "Partly Cloudy"; // Example weather condition

// Define conditions for viable wind chill calculations
const isViableWindChill = (temperature <= 50 && windSpeed > 3); // Conditions for Imperial units (°F and mph)

// Calculate wind chill or display "N/A"
let windChillResult = 'N/A';
if (isViableWindChill) {
    windChillResult = calculateWindChill(temperature, windSpeed);
}

// Display the weather information
document.getElementById('temperature').textContent = temperature;
document.getElementById('condition').textContent = condition;
document.getElementById('windSpeed').textContent = windSpeed;
document.getElementById('windchill').textContent = windChillResult;

// Dynamically update the footer with current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
