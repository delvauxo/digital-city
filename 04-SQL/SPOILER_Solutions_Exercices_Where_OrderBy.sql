--ORder by
--Exercice 2.2.1 � Ecrire une requ�te pour pr�senter le login 
--et le r�sultat de tous les �tudiants ayant obtenu un r�sultat 
--annuel sup�rieur � 16
SELECT [Login], year_result
FROM student
Where year_result>16


--Exercice 2.2.2 � Ecrire une requ�te pour pr�senter le nom et 
--l�id de section des �tudiants dont le pr�nom est Georges
SELECT last_name, student_id
FROM student
WHERE first_name='Georges'

--Exercice 2.2.3 � Ecrire une requ�te pour pr�senter le nom et 
--le r�sultat annuel de tous les �tudiants ayant obtenu un r�sultat annuel 
--compris entre 12 et 16
SELECT last_name, year_result
FROM student
WHERE year_result BETWEEN 12 AND 16


--Exercice 2.2.4 � Ecrire une requ�te pour pr�senter le nom, 
--l�id de section et le r�sultat annuel de tous les �tudiants 
--qui ne font pas partie des sections 1010, 1020 et 1110

SELECT last_name, section_id
FROM student
WHERE section_id NOT IN (1010,1020,1110)
--Exercice 2.2.5 � Ecrire une requ�te pour pr�senter le nom et 
--l�id de section de tous les �tudiants qui ont un nom de famille 
--qui termine par � r �
SELECT last_name, section_id
FROM student
WHERE last_name LIKE '%r%'

--Exercice 2.2.6 � Ecrire une requ�te pour pr�senter le nom et 
--le r�sultat annuel de tous les �tudiants qui ont un nom de famille
--pour lequel la troisi�me lettre est un � n � et qui ont obtenu 
--un r�sultat annuel sup�rieur � 10
SELECT last_name, year_result
FROM student
WHERE last_name LIKE '__n%' AND year_result>10

--Exercice 2.2.7 � Ecrire une requ�te pour pr�senter le nom et 
--le r�sultat annuel class� par r�sultats annuels d�croissants de 
--tous les �tudiants qui ont obtenu un r�sultat annuel inf�rieur ou �gal � 3
SELECT last_name, year_result
FROM student
WHERE year_result<=3
ORDER by year_result DESC
--Exercice 2.2.8 � Ecrire une requ�te pour pr�senter le nom complet 
--(nom et pr�nom s�par�s par un espace) et le r�sultat annuel class� 
--par nom croissant sur le nom de tous les �tudiants appartenant � la 
--section 1010
SELECT last_name+' '+ first_name 'Nom Complet', year_result
FROM student
WHERE section_id=1010
ORDER by last_name DESC
--Exercice 2.2.9 � Ecrire une requ�te pour pr�senter le nom, 
--l�id de section et le r�sultat annuel class� par ordre croissant 
--sur la section de tous les �tudiants appartenant aux sections 
--1010 et 1020 ayant un r�sultat annuel qui n�est pas compris 
--entre 12 et 18
SELECT last_name, section_id, year_result
FROM student
WHERE section_id in (1010, 1020) AND year_result NOT BETWEEN 12 AND 18
ORDER by section_id 
--Exercice 2.2.10 � Ecrire une requ�te pour pr�senter le nom, 
--l�id de section et le r�sultat annuel sur 100 
--(nommer la colonne � R�sultat sur 100 �) class� par ordre 
--d�croissant du r�sultat de tous les �tudiants appartenant
--aux sections commen�ant par 13 et ayant un r�sultat annuel 
--sur 100 inf�rieur ou �gal � 60
SELECT last_name, section_id, (CONVERT(FLOAT,year_result)/20)*100 as 'R�sultat sur 100'
FROM student
WHERE CONVERT(VARCHAR,section_id) LIKE '13%' AND (CONVERT(FLOAT,year_result)/20)*100  <=60
ORDER by year_result DESC


