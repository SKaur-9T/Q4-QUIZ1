// Function to calculate BMI
function calculateBMI(){
   var height = document.getElementById("height").value;
   var weight = document.getElementById("weight").value;
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById("result").innerHTML = "Please enter valid numbers for height and weight.";
      return;
    }
  
    // BMI formula: weight / (height * height)
    var bmi = weight / Math.pow(height, 2); // Using Math.pow()
    var roundedBMI = Math.round(bmi * 10) / 10; // Round to 1 decimal place
  
    let category = "";
  
    // Conditional logic for BMI categories
    if (roundedBMI < 18.5) {
      category = "Underweight";
    } else if (roundedBMI >= 18.5 && roundedBMI < 24.9) {
      category = "Normal weight";
    } else if (roundedBMI >= 25 && roundedBMI < 29.9) {
      category = "Overweight";
    } else if (roundedBMI >=30) {
      category = "Obese";
    }
  
    // Display result
    document.getElementById("result").innerHTML = "Your bmi is " + roundedBMI + ". You are classified as " + category;
  }

// Function to reset page
function clearResult(){
  window.location.reload();
}