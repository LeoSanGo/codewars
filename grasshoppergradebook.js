/* 
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade (s1, s2, s3) {
  // Code here
  let average = (s1 + s2 + s3) / 3;
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

/* 
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);

const getGrade = (s1, s2, s3) =>
  (val => val < 60 ? `F` : val < 70 ? `D` : val < 80 ? `C` : val < 90 ? `B` : `A`)
  ((s1 + s2 + s3) / 3);

  
*/