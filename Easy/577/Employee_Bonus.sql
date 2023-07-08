# Write your MySQL query statement below

Select A.name as name,B.bonus as bonus from Employee A left join Bonus B on A.empId=B.empId where B.bonus<1000 or B.bonus is null;