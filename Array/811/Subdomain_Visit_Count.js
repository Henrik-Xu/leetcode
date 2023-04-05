/**
 * Subdomain Visit Count
 */
let subdomainVisits = function (cpdomains) {
  let map = new Map();
  for (const cpdomain of cpdomains) {
    let [count, domains] = cpdomain.split(' ');
    let domainArr = domains.split('.');
    let str = '';
    for (let i = domainArr.length - 1; i >= 0; i--) {
      if (i == domainArr.length - 1) {
        str += domainArr[i];
      } else {
        str = domainArr[i] + '.' + str;
      }
      if (map.has(str)) {
        map.set(str, map.get(str) + parseInt(count));
      } else {
        map.set(str, parseInt(count));
      }
    }
  }
  let ans = [];
  for (const [key, value] of map.entries()) {
    ans.push('' + value + ' ' + key);
  }
  return ans;
};
let cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
let res = subdomainVisits(cpdomains);
console.log(res);
