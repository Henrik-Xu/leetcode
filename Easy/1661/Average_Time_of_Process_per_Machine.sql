# Average Time of Process per Machine
select a1.machine_id, a1.timestamp, a2.timestamp
from Activity a1
join Activity a2
on a1.process_id=a2.process_id
and a1.machine_id=a2.machine_id
and a1.timestamp<a2.timestamp;