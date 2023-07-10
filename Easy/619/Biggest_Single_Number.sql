# Refer to: https://stackoverflow.com/questions/17250243/how-to-return-null-when-result-is-empty
select(
  select num
  from number
  group by num
  having count(*) = 1
  order by num desc limit 1
) as num;