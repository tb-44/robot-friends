SELECT * 
FROM users 
WHERE lower(last) = $1;