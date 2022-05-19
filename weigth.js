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

/* 
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";

                                    function bmi(weight, height) {
  
var bmi  = weight/(height*height);

 return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}

function bmi(weight, height) {
  let b = weight / height**2;
  return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese';
}

function bmi(weight, height, index = weight/(height**2)) {
  return index <= 18.5 ? 'Underweight' : index <= 25.0 ? "Normal" : index <= 30 ? 'Overweight' : 'Obese';
} // dupa
*/