/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*			       Company	database			*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
SET ECHO ON



CREATE TABLE Department (
	D#		NUMBER(5)	NOT NULL, /* Department number		*/
	DName		VARCHAR2(30)	NOT NULL, /* Department name		*/
	Manager#	CHAR(5)		NOT NULL, /* Department manager number	*/
	MSDate		DATE, 			  /* Manager start date     	*/
	CONSTRAINT Department_PK PRIMARY KEY(D#),
	CONSTRAINT Department_CK UNIQUE(DName)
);

INSERT INTO Department VALUES (1, 'SALES', '00110', TO_DATE('02/01/2024', 'DD/MM/YYYY'));
INSERT INTO Department VALUES (2, 'ACCOUNTING', '00120', TO_DATE('30/10/2023', 'DD/MM/YYYY'));
INSERT INTO Department VALUES (3, 'GAMES', '00150', TO_DATE('01/03/2021', 'DD/MM/YYYY'));
INSERT INTO Department VALUES (4, 'HUMAN RESOURCES', '00200', TO_DATE('02/01/2022', 'DD/MM/YYYY'));
INSERT INTO Department VALUES (5, 'SPORTS', '00250', TO_DATE('10/05/2023', 'DD/MM/YYYY'));

CREATE TABLE DeptLocation (
	D#		NUMBER(5)	NOT NULL, /* Department number		*/
	Address		VARCHAR2(50)	NOT NULL, /* Department location	*/
	CONSTRAINT DeptLocation_PK PRIMARY KEY(D#, Address),
	CONSTRAINT DeptLocation_FK FOREIGN KEY(D#) REFERENCES Department(D#)
);

INSERT INTO DeptLocation VALUES (1, '1 gipps road, Wollongong, NSW 2500');
INSERT INTO DeptLocation VALUES (1, '10 Jones Street, Sydney, NSW 2000');
INSERT INTO DeptLocation VALUES (1, '25 Gore Street, Melbourne, VIC 3065');
INSERT INTO DeptLocation VALUES (2, '108 George Street, Sydney, NSW 2000');
INSERT INTO DeptLocation VALUES (3, '183 Pier Street, Sydney, NSW 2000');
INSERT INTO DeptLocation VALUES (3, '64 Smith Street, Wollongong, NSW 2500');
INSERT INTO DeptLocation VALUES (4, '4 Elizabeth Street, Melbourne, VIC 3060');
INSERT INTO DeptLocation VALUES (5, '77 Kenny Street, Wollongong, NSW 2500');
INSERT INTO DeptLocation VALUES (5, '263 Box road, Sydney, NSW 2170');


CREATE TABLE Employee (
	E#		CHAR(5)		NOT NULL, /* Employee number    	*/
	Name		VARCHAR2(30)	NOT NULL, /* Employee name		*/
	DOB		Date,			  /* Date of birth		*/
	Address		VARCHAR2(50),		  /* Home address		*/
	Sex		CHAR,			  /* M-Male, F-Female		*/
	Salary		NUMBER(7,2),		  /* Salary			*/
	Super#		CHAR(5),		  /* Supervisor number		*/
	D#		NUMBER(5), 		  /* Department number		*/
	CONSTRAINT Employee_PK PRIMARY KEY(E#),
	CONSTRAINT Employee_FK1 FOREIGN KEY (Super#) REFERENCES Employee(E#),
	CONSTRAINT Employee_FK2 FOREIGN KEY (D#) REFERENCES Department (D#)
);

INSERT INTO Employee VALUES ('00100', 'Albert', TO_DATE('13/10/1965', 'DD/MM/YYYY'), '12 Robert street, Woonona, NSW 2517', 'M', 186.5, NULL, NULL);
INSERT INTO Employee VALUES ('00110', 'Alvin', TO_DATE('13/10/1977', 'DD/MM/YYYY'), '56 Marlo road, Wollongong, NSW 2500', 'M', 156.4, '00100', 1);
INSERT INTO Employee VALUES ('00120', 'Alice', TO_DATE('17/06/1973', 'DD/MM/YYYY'), '43 Collaery road, Russell Vale, NSW 2517', 'F', 156.5, '00100', 2);
INSERT INTO Employee VALUES ('00150', 'Bob', TO_DATE('02/07/1960', 'DD/MM/YYYY'), '23 Kendall street, Wollongong, NSW 2500', 'M', 166.4, '00100', 3);
INSERT INTO Employee VALUES ('00200', 'Carl', TO_DATE('02/02/1967', 'DD/MM/YYYY'), '44 Mount Keira road, West Wollongong, NSW 2500', 'M', 156.3, '00100', 4);
INSERT INTO Employee VALUES ('00250', 'Douglass', TO_DATE('14/04/1983', 'DD/MM/YYYY'), '78 Uralba street, West Wollongong, NSW 2500', 'M', 156.4, '00100', 5);
INSERT INTO Employee VALUES ('00101', 'Peter', TO_DATE('13/11/1976', 'DD/MM/YYYY'), '77 Gipps road, Wollongong, NSW 2500', 'M', 85.2, '00110', 1);
INSERT INTO Employee VALUES ('00103', 'Ami', TO_DATE('12/09/1985', 'DD/MM/YYYY'), '51 Mackie street, Coniston, NSW 2500', 'F', 78.2, '00110', 1);
INSERT INTO Employee VALUES ('00107', 'Wendy', TO_DATE('12/09/1988', 'DD/MM/YYYY'), '41 Wall street, Wollongong, NSW 2500', 'F', 68.2, '00110', 1);
INSERT INTO Employee VALUES ('00109', 'Michael', TO_DATE('12/09/1990', 'DD/MM/YYYY'), '112 Smith road, Wollongong, NSW 2500', 'M', 58.2, '00110', 1);
INSERT INTO Employee VALUES ('00125', 'Angela', TO_DATE('20/11/1990', 'DD/MM/YYYY'), '23 Gibsons road, Figtree, NSW 2525', 'F', 56.4, '00120', 2);
INSERT INTO Employee VALUES ('00105', 'Robert', TO_DATE('15/01/1986', 'DD/MM/YYYY'), '66 Risely road, Figtree, NSW 2525', 'M', 66.2, '00150', 3);
INSERT INTO Employee VALUES ('00136', 'Aban', TO_DATE('15/01/1990', 'DD/MM/YYYY'), '187 Princes Highway, Wollongong, NSW 2500', 'M', 55.3, '00200', 4);
INSERT INTO Employee VALUES ('00187', 'Eadger', TO_DATE('07/04/1986', 'DD/MM/YYYY'), '73 Ocean street, Wollongong, NSW 2500', 'M', 76.5, '00250', 5);


CREATE TABLE Project (
	P#		NUMBER(10)	NOT NULL, /* Project number		*/
	PTitle		VARCHAR2(30)	NOT NULL, /* Project title		*/
	Sponsor		VARCHAR2(30),		  /* Project sponsor name	*/
	D#		NUMBER(5)	NOT NULL, /* Department number		*/
	Budget		NUMBER(10,2)	NOT NULL, /* Project budget		*/
	CONSTRAINT Project_PK PRIMARY KEY(P#),
	CONSTRAINT Project_FK FOREIGN KEY (D#) REFERENCES Department(D#),
	CONSTRAINT Project_CK UNIQUE (PTitle)
);

INSERT INTO Project VALUES (1001, 'Computation', 'Microsoft', 1, 25000);
INSERT INTO Project VALUES (1002, 'Study methods', 'Education committee', 3, 15000);
INSERT INTO Project VALUES (1003, 'Racing car', 'Cloud Pty Ltd', 3, 225000);
INSERT INTO Project VALUES (1004, 'Football', 'Football club', 5, 35000);
INSERT INTO Project VALUES (1005, 'Swimming', 'Education committee', 5, 125000);
INSERT INTO Project VALUES (1006, 'Training', 'Education committee', 4, 15000);

CREATE TABLE WorksOn (
	E#		CHAR(5)		NOT NULL, /* Employee number		*/
	P#		NUMBER(10)	NOT NULL, /* Project number		*/
	Hours		NUMBER(3,1)	NOT NULL, /* Working hours per week	*/
	CONSTRAINT WorksOn_PK PRIMARY KEY(E#, P#),
	CONSTRAINT WorksOn_FK1 FOREIGN KEY(E#) REFERENCES Employee(E#),	
	CONSTRAINT WorksOn_FK2 FOREIGN KEY(P#) REFERENCES Project(P#)
);

INSERT INTO WorksOn VALUES ('00110', 1001, 10);
INSERT INTO WorksOn VALUES ('00101', 1001, 20);
INSERT INTO WorksOn VALUES ('00150', 1002, 10);
INSERT INTO WorksOn VALUES ('00105', 1002, 10);
INSERT INTO WorksOn VALUES ('00105', 1003, 20);
INSERT INTO WorksOn VALUES ('00105', 1004, 20);
INSERT INTO WorksOn VALUES ('00250', 1004, 15);
INSERT INTO WorksOn VALUES ('00187', 1004, 25);
INSERT INTO WorksOn VALUES ('00105', 1005, 15);
INSERT INTO WorksOn VALUES ('00136', 1006, 20);

CREATE TABLE Dependent (
	E#		CHAR(5)		NOT NULL, /* Employee number  		*/
	DName		VARCHAR2(30)	NOT NULL, /* Dependent name		*/
	Sex		CHAR,			  /* Dependent sex, M-Male, F-Female */
	DOB		DATE,			  /* Date of birth		*/
	Relationship	VARCHAR2(10),		  /* Relationship with the employee */
	CONSTRAINT Dependent_PK PRIMARY KEY(E#, DName),
	CONSTRAINT Dependent_FK FOREIGN KEY(E#) REFERENCES Employee(E#),
	CONSTRAINT Dependent_CK CHECK (Relationship IN ('SON', 'DAUGHTER', 'SPOUSE', 'OTHER'))
);

INSERT INTO Dependent VALUES ('00100', 'Judy', 'F', TO_DATE('11/03/1966', 'DD/MM/YYYY'), 'SPOUSE');
INSERT INTO Dependent VALUES ('00100', 'Bolt', 'M', TO_DATE('05/03/1986', 'DD/MM/YYYY'), 'SON');
INSERT INTO Dependent VALUES ('00100', 'Edee', 'F', TO_DATE('11/03/1989', 'DD/MM/YYYY'), 'DAUGHTER');
INSERT INTO Dependent VALUES ('00120', 'Blues', 'M', TO_DATE('11/03/1975', 'DD/MM/YYYY'), 'SPOUSE');
INSERT INTO Dependent VALUES ('00120', 'Kadi', 'F', TO_DATE('05/03/2001', 'DD/MM/YYYY'), 'DAUGHTER');
INSERT INTO Dependent VALUES ('00120', 'Edee', 'F', TO_DATE('15/05/2003', 'DD/MM/YYYY'), 'DAUGHTER');
INSERT INTO Dependent VALUES ('00200', 'Eva', 'F', TO_DATE('10/05/1968', 'DD/MM/YYYY'), 'SPOUSE');


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
