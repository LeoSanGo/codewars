

function areYouPlayingBanjo(name) {
  
  return name.startsWith('R') || name.startsWith('r') ? name + ' plays banjo' : 
  name + ' does not play banjo'
}

/* 
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

----------------------------------------

const areYouPlayingBanjo = name => (name.toUpperCase().startsWith('R')) ? name + ' plays banjo' : name +' does not play banjo';

*/