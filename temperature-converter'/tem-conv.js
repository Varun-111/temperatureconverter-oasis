let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');


celsius.oninput = () => {
    let output = (parseFloat(celsius.value)*9)/5 + 32; 
    fahrenheit.value=parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output1 = (parseFloat(fahrenheit.value) - 32)*5 / 9; 
    celsius.value=parseFloat(output1.toFixed(2));
};
