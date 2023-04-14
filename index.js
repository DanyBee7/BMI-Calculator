function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", indicating you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi +", indicating you have a normal weight.";
    }
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", indicating you are overweight.";
    }
    return interpretation;
}
bmi = bmiCalculator(48, 1.60);