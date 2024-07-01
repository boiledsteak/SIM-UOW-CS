-- Assignment 2 Task 4
-- Timothy Mah
-- 8750634
-- txamah001@mymail.sim.edu.sg

SPOOL solution4Output.lst
SET ECHO ON
SET FEEDBACK ON
SET LINESIZE 100
SET PAGESIZE 200
SET SERVEROUTPUT ON

-- Adding a new column for task4
ALTER TABLE Employee
ADD "INSERTDATE" DATE;


CREATE OR REPLACE TRIGGER InsertOncePerDay
BEFORE INSERT ON Employee
FOR EACH ROW
DECLARE
    counter NUMBER;
BEGIN
    -- Check if the user has already inserted a row for the current day
    SELECT COUNT(*) INTO counter FROM EMPLOYEE WHERE TRUNC(INSERTDATE) = TRUNC(SYSDATE); 
    
    -- If the user has already inserted a row for the current day, raise an error
    IF counter >= 1 THEN
        RAISE_APPLICATION_ERROR(-20001, 'You are allowed to insert only one row per day.');
    END IF;
END;
/


-- case 1: normal insertion
-- Insert a row for an employee on the current day
INSERT INTO Employee (E#, NAME, DOB, ADDRESS, SEX, SALARY, SUPER#, D#, INSERTDATE) 
VALUES ('E069', 'John Doe', TO_DATE('1990-01-01', 'YYYY-MM-DD'), '123 Main St', 'M', 50000, NULL, 1, SYSDATE);
-- The insertion should succeed because it's the first insertion on this day

-- case 2: trigger error
-- Insert a row for the same employee on the same day
INSERT INTO Employee (E#, NAME, DOB, ADDRESS, SEX, SALARY, SUPER#, D#, INSERTDATE) 
VALUES ('E096', 'John Lim', TO_DATE('1990-01-01', 'YYYY-MM-DD'), '123 Main St', 'M', 50000, NULL, 1, SYSDATE);
-- The insertion should fail a row has been inserted today already

DROP TRIGGER InsertOncePerDay;
DELETE FROM Employee WHERE E# = 'E069';
DELETE FROM Employee WHERE E# = 'E096';
ALTER TABLE Employee
DROP COLUMN INSERTDATE;


SPOOL OFF