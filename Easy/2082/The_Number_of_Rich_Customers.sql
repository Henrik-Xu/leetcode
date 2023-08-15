# The Number of Rich Customers

# Write your MySQL query statement below
SELECT COUNT(DISTINCT customer_id) AS rich_count FROM Store WHERE amount > 500