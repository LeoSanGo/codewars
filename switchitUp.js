/* When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

 */

function switchItUp(number) {
    switch (number) {
        case 0:
            return "Zero"
            break;
        case 1:
            return "One"
            break;
        case 2:
            return "Two"
            break;
        case 3:
            return "Three"
            break;
        case 4:
            return "Four"
            break;
        case 5:
            return "Five"
            break;
        case 6:
            return "Six"
            break;
        case 7:
            return "Seven"
            break;
        case 8:
            return "Eight"
            break;
        case 9:
            return "Nine"
            break;

        default:
            break;
    }
}

const result = switchItUp(8)
console.log(result);


/* 
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
----------------

function switchItUp(number){
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[number];
}
---------------------------
function switchItUp(number){
  let nums = {0:'Zero',1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine'};
  return nums[number];
}
-------------------------
const switchItUp = number => [ 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine' ][number];

*/