document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerHTML = `
            <p class="text-lg font-medium">Your BMI: <span class="font-bold">${bmi}</span></p>
            <p class="text-sm">${category}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p class="text-red-500">Please enter valid weight and height.</p>';
    }
});
