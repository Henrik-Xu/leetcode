/* Write a SQL query to get the second highest salary from the Employee table. */

/*
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
*/
/* version 01 */
select IFNULL((select distinct Salary from Employee order by Salary desc limit 1,1),null) as SecondHighestSalary;

/* version 02 */
