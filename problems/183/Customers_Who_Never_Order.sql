# Write your MySQL query statement below

/* Customers
+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
*/

/*Orders
+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
*/

/* Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything */

/* version 01 */
select name as Customers from Customers where Id not in (select CustomerId from Orders);

/* version 02 */

select name as Customers from Customers inner join Orders where Customers.Id != Orders.CustomerId;
