/* 
A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task
The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"
Note for Elixir:
In Elixir the empty addresses' input is an empty list, not an empty string.

Note:
You can see a few addresses and zipcodes in the test cases.
*/

function travel(r, zipcode) {
  const re = /(\d{1,4}) (.*?) (\w{2} \d{4,5}),?/gi
  const res = {
    prefix: zipcode + ':',
    addr: [],
    nb: [],
  }
  while(arr = re.exec(r)){
    const [_ , nb, addr, zip] = arr
    if(zip != zipcode)
      continue
    res.addr.push(addr)
    res.nb.push(nb)
  }
  return res.prefix + res.addr.join(',') + '/' + res.nb.join(',')
}

/* 
Other Solutions


function travel(r, zipcode) {
    const addressList = r.split(",");

    const streets = [];
    const numbers = [];

    addressList.forEach(address => {
        let zip = address.substring(address.length - 8, address.length);
        if (zip === zipcode) {
            let number = address.substring(0, address.indexOf(" ") + 1);
            let street = address.substring(address.indexOf(" "), address.length -8);
            
            streets.push(street.trim());
            numbers.push(number.trim());
        }
    });
    return `${zipcode}:${streets.join(",")}/${numbers.join(",")}`;
}

---------------------------------------

function travel(r, zipcode) {
  re = RegExp('(\\d+)\\s+(.+)\\s+'+zipcode+'$')
  streets = r.split(',').map(x=>x.match(re)).filter(x=>x)
  return zipcode+':'+streets.map(x=>x[2])+'/'+streets.map(x=>x[1])
}

------------------------------------------------------

function travel(r, zipcode) {
    var re = /(\d{1,4}) (.*?) (\w{2} \d{4,5}),?/gi
    var res = {
      prefix: zipcode + ':',
      addr: [],
      nb: [],
    }
    while(arr = re.exec(r)){
      var [_ , nb, addr, zip] = arr
      if(zip != zipcode)
        continue
      res.addr.push(addr)
      res.nb.push(nb)
    }
    return res.prefix + res.addr.join(',') + '/' + res.nb.join(',')
}

-----------------------------------------------------------------------

function travel(r, zipcode) {
  var matches = r.split(',').filter(str => str.slice(-8) == zipcode);
  return zipcode + ':' + matches.map(addr => addr.split(' ').slice(1, -2).join(' ')).join(',')
    + '/' + matches.map(addr => addr.split(' ')[0]).join(',')
}

--------------------------------------------------------------------------------

const travel = (r, zipcode) =>
  (arr => `${zipcode}:${arr.map(val => val[2])}/${arr.map(val => val[1])}`)
  (r.split(`,`).map(val => val.match(/(\d+)\s(.+)\s(\w{2}\s\d{5})/)).filter(val => val[3] === zipcode));

  -------------------------------------------------------------------------------------

function travel(r, zipcode) {
  const array = r.split(',');
  const matchedResults = array.filter(e => e.split(' ').slice(-2).join(' ') === zipcode);
  
  if (!matchedResults.length) {
    return zipcode + ':/';
  }
  
  const houses = matchedResults.map(e => e.split(' ')[0]).join(',');
  const streetAndTown = matchedResults.map(e => e.split(' ').slice(1, -2).join(' ')).join(',');
  
  return `${zipcode}:${streetAndTown}/${houses}`;
}

---------------------------------------------------------------------


function travel(r, zipcode) {
  if(!zipcode)return ':/';
  var arr=r.split(',')
           .filter(a=>new RegExp(zipcode+'$').test(a));
  var numStr=arr.map(a=>a.match(/\d+/)[0]).join(',');
  var str=arr.map(a=>a.match(new RegExp(' [\\s\\S]+(?='+zipcode+')'))[0].trim())
             .join(',');
  return zipcode+':'+str+'/'+numStr;
}

------------------------------------------------------

function travel(r, zipcode) {
  var matches = r.split(',').filter(str => str.slice(-8) == zipcode);
  return zipcode + ':' + matches.map(addr => addr.split(' ').slice(1, -2).join(' ')).join(',')
    + '/' + matches.map(addr => addr.split(' ')[0]).join(',')
}

----------------------------------------------------------


travel=(a,b,c=a.split`,`.filter(a=>a.slice(-8)==b))=>b+':'+c.map(a=>a.match(/(?<= ).*(?= [A-Z]{2})/)).join`,`+'/'+c.map(a=>a.match(/\d+/)).join`,`

*/