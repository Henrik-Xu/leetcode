/**
 * Number of Students Unable to Eat Lunch
 */
var countStudents = function(students, sandwiches) {
    let n=students.length,arr=new Array(2).fill(0);
    for (const student of students) {
        arr[student]++;
    }
    let k = 0
    for (; k < n && arr[sandwiches[k]]>0; k++) {
        arr[sandwiches[k]]--;
    }
    return n-k;
};
let students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1];
let res=countStudents(students,sandwiches);
console.log(res);