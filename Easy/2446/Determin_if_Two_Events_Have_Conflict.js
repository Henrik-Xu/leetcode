/**
 * Determine if Two Events Have Conflict
 */
const toMins = t => {
    let bits = t.split(':');
    return bits[0] * 60 + bits[1] * 1;
}
const haveConflict = (event1, event2) => Math.max(toMins(event1[0]), toMins(event2[0])) <= Math.min(toMins(event1[1]), toMins(event2[1]));
let event1 = ["01:15","02:00"], event2 = ["02:00","03:00"];
let res=haveConflict(event1,event2);
console.log(res);