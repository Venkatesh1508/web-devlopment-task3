function convertToFahrenheit() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * (5/9);
    document.getElementById("result").innerText = `${fahrenheit} Fahrenheit is ${celsius.toFixed(2)} Celsius`;
}
