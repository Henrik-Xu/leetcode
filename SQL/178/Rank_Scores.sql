/*
* Rank Scores
Table: Scores

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| score       | decimal |
+-------------+---------+
id is the primary key for this table.
Each row of this table contains the score of a game. Score is a floating point value with two decimal places.

Write an SQL query to rank the scores. The ranking should be calculated according to the following rules:

The scores should be ranked from the highest to the lowest.
If there is a tie between two scores, both should have the same ranking.
After a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no holes between ranks.
Return the result table ordered by score in descending order.

+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
*/

/*
For example, given the above Scores table, your query should generate the following report (order by highest score):

+-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
*/

/*
With Variables: 

First one uses two variables, one for the current rank and one for the previous score.
*/
SELECT
  Score,
  @rank := @rank + (@prev <> (@prev := Score)) 'Rank'
FROM
  Scores,
  (SELECT @rank := 0, @prev := -1) init
ORDER BY Score desc


/*
Always Count: 

This one counts, for each score, the number of distinct greater or equal scores.
*/
SELECT
  Score,
  (SELECT count(distinct Score) FROM Scores WHERE Score >= s.Score) 'Rank' 
FROM Scores s
ORDER BY Score desc

/*
* Always Count, Pre-uniqued: 

Same as the previous one, but faster because I have a subquery that "uniquifies" the scores first. 

Not entirely sure why it's faster, I'm guessing MySQL makes tmp a temporary table and uses it for every outer Score.
*/
SELECT
  Score,
  (SELECT count(*) FROM (SELECT distinct Score s FROM Scores) tmp WHERE s >= Score) Rank
FROM Scores
ORDER BY Score desc

