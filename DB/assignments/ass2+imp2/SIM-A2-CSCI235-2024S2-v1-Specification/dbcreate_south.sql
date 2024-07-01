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


CREATE TABLE DeptLocation (
	D#		NUMBER(5)	NOT NULL, /* Department number		*/
	Address		VARCHAR2(50)	NOT NULL, /* Department location	*/
	CONSTRAINT DeptLocation_PK PRIMARY KEY(D#, Address),
	CONSTRAINT DeptLocation_FK FOREIGN KEY(D#) REFERENCES Department(D#)
);


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


CREATE TABLE WorksOn (
	E#		CHAR(5)		NOT NULL, /* Employee number		*/
	P#		NUMBER(10)	NOT NULL, /* Project number		*/
	Hours		NUMBER(3,1)	NOT NULL, /* Working hours per week	*/
	CONSTRAINT WorksOn_PK PRIMARY KEY(E#, P#),
	CONSTRAINT WorksOn_FK1 FOREIGN KEY(E#) REFERENCES Employee(E#),	
	CONSTRAINT WorksOn_FK2 FOREIGN KEY(P#) REFERENCES Project(P#)
);


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


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
