# Find Users With Valid E-Mails
SELECT
  *
FROM
  Users
WHERE
  mail REGEXP '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode[.]com$';