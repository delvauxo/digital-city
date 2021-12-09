--ORder by
--Exercice 2.2.1 – Ecrire une requête pour présenter le login 
--et le résultat de tous les étudiants ayant obtenu un résultat 
--annuel supérieur à 16
SELECT [Login], year_result
FROM student
Where year_result>16


--Exercice 2.2.2 – Ecrire une requête pour présenter le nom et 
--l’id de section des étudiants dont le prénom est Georges
SELECT last_name, student_id
FROM student
WHERE first_name='Georges'

--Exercice 2.2.3 – Ecrire une requête pour présenter le nom et 
--le résultat annuel de tous les étudiants ayant obtenu un résultat annuel 
--compris entre 12 et 16
SELECT last_name, year_result
FROM student
WHERE year_result BETWEEN 12 AND 16


--Exercice 2.2.4 – Ecrire une requête pour présenter le nom, 
--l’id de section et le résultat annuel de tous les étudiants 
--qui ne font pas partie des sections 1010, 1020 et 1110

SELECT last_name, section_id
FROM student
WHERE section_id NOT IN (1010,1020,1110)
--Exercice 2.2.5 – Ecrire une requête pour présenter le nom et 
--l’id de section de tous les étudiants qui ont un nom de famille 
--qui termine par « r »
SELECT last_name, section_id
FROM student
WHERE last_name LIKE '%r%'

--Exercice 2.2.6 – Ecrire une requête pour présenter le nom et 
--le résultat annuel de tous les étudiants qui ont un nom de famille
--pour lequel la troisième lettre est un « n » et qui ont obtenu 
--un résultat annuel supérieur à 10
SELECT last_name, year_result
FROM student
WHERE last_name LIKE '__n%' AND year_result>10

--Exercice 2.2.7 – Ecrire une requête pour présenter le nom et 
--le résultat annuel classé par résultats annuels décroissants de 
--tous les étudiants qui ont obtenu un résultat annuel inférieur ou égal à 3
SELECT last_name, year_result
FROM student
WHERE year_result<=3
ORDER by year_result DESC
--Exercice 2.2.8 – Ecrire une requête pour présenter le nom complet 
--(nom et prénom séparés par un espace) et le résultat annuel classé 
--par nom croissant sur le nom de tous les étudiants appartenant à la 
--section 1010
SELECT last_name+' '+ first_name 'Nom Complet', year_result
FROM student
WHERE section_id=1010
ORDER by last_name DESC
--Exercice 2.2.9 – Ecrire une requête pour présenter le nom, 
--l’id de section et le résultat annuel classé par ordre croissant 
--sur la section de tous les étudiants appartenant aux sections 
--1010 et 1020 ayant un résultat annuel qui n’est pas compris 
--entre 12 et 18
SELECT last_name, section_id, year_result
FROM student
WHERE section_id in (1010, 1020) AND year_result NOT BETWEEN 12 AND 18
ORDER by section_id 
--Exercice 2.2.10 – Ecrire une requête pour présenter le nom, 
--l’id de section et le résultat annuel sur 100 
--(nommer la colonne « Résultat sur 100 ») classé par ordre 
--décroissant du résultat de tous les étudiants appartenant
--aux sections commençant par 13 et ayant un résultat annuel 
--sur 100 inférieur ou égal à 60
SELECT last_name, section_id, (CONVERT(FLOAT,year_result)/20)*100 as 'Résultat sur 100'
FROM student
WHERE CONVERT(VARCHAR,section_id) LIKE '13%' AND (CONVERT(FLOAT,year_result)/20)*100  <=60
ORDER by year_result DESC


