/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"


*/
function bmi(weight, height) {
  const bmi2 = weight / (height * height);

  if (bmi2 <= 18.5) return 'Underweight';
  else if (bmi2 <= 25.0) return 'Normal';
  else if (bmi2 <= 30.0) return 'Overweight';
  else if (bmi2 > 30) return 'Obese';
}
