# Write your MySQL query statement below

select w1.id from Weather w1,Weather w2 where TO_DAYS(w1.RecordDate) - TO_DAYS(W2.RecordDate)=1 and w1.Temperature > w2.Temperature;