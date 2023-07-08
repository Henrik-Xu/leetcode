# Write your MySQL query statement below
# Follow up: What if more than one customer has the largest number of orders, can you find all the customer_number in this case?

select customer_number from orders
group by customer_number
order by count(customer_number) desc limit 1;