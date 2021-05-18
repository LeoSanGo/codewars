/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url) {
  let x = 0;
  if (url.includes('www')) {
    x = 1 + url.indexOf('.');
  } else if (url.includes('http')) {
    x = 2 + url.indexOf('/');
  }

  let u = url.slice(x, url.length);
  y = u.indexOf('.');
  let z = u.substring(0, y);
  return z;
}

console.log(domainName('https://yahoo.com'));

/* 
Other Solutions
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

------------------------------
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

--------------------------------------
function domainName(url){
  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
}

------------------------------------
function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

------------------------------------------

"use strict";

function domainName(url) {

  url = url.toString().replace('https://', '').replace('http://', '').replace('www.', '');

  return url.split('.')[0];
}

---------------------------------------------------



*/
