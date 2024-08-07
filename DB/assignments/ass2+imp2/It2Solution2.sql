-- Implementation task2 task2
-- Timothy Mah
-- 8750634
-- txamah001@mymail.sim.edu.sg

SPOOL It2Solution2.lst
SET ECHO ON
SET FEEDBACK ON
SET LINESIZE 100
SET PAGESIZE 200
SET SERVEROUTPUT ON

create index A1Task3Idx on orders(o_orderdate, o_clerk, o_totalprice);

-- qn a
explain plan set STATEMENT_ID='2a' for
SELECT o_orderdate FROM ORDERS WHERE o_orderdate= TO_DATE('1994-08-13', 'YYYY-MM-DD') AND o_totalprice = 98676.18 AND  o_clerk='Clerk#000000776';
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE','2a','SERIAL'));
-- qn b
explain plan set STATEMENT_ID='2b'for
SELECT O_TOTALPRICE FROM ORDERS WHERE O_ORDERDATE = TO_DATE('1997', 'YYYY');
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE','2b','SERIAL'));
-- qn c
explain plan set STATEMENT_ID='2c'for
SELECT O_TOTALPRICE FROM ORDERS;
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE','2c','SERIAL'));
-- qn d
explain plan set STATEMENT_ID='2d' for
SELECT * FROM ORDERS WHERE o_orderdate= TO_DATE('1994-08-13', 'YYYY-MM-DD') AND o_totalprice = 98676.18 AND  o_clerk='Clerk#000000776';
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE','2d','SERIAL'));
-- qn e
explain plan set STATEMENT_ID='2e' for
SELECT * FROM ORDERS WHERE O_ORDERDATE = TO_DATE('1997', 'YYYY');
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE','2e','SERIAL'));



DROP INDEX A1Task3Idx;

SPOOL OFF