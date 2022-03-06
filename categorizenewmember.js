/* 

*/


function openOrSenior(data) {
  openSeniorList = []
  data.forEach((element) => {
    if (element[0] >= 55 && element[1] > 7) {openSeniorList.push('Senior')}
    else {openSeniorList.push('Open')}
  });
  return openSeniorList
}

openOrSenior([[18,18],[84,7],[80,20],[47,10],[31,18],[82,5]])


/* 
Other solutions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

-------------------------------------------------------------------

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}

-----------------------------------------------------

function openOrSenior(data){
  return data.map(n => n[0] >= 55 && n[1] > 7 ? 'Senior' : 'Open');
}

-------------------------------------------


*/