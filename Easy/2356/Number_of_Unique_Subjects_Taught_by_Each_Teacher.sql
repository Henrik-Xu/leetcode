# Number of Unique Subjects Taught by Each Teacher
# Write your MySQL query statement below
Select  teacher_id ,
count(distinct subject_id ) as cnt from Teacher
group by teacher_id