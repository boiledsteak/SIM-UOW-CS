
#include <string>
#include <sstream>
#include <iostream>

using namespace std;

// g++ -std=c++11 usingStructs.cpp -o usingStructs.exe


struct StudentRecordStructType
{
	string name;
	string address;
	double gpa;

	string toString();
};

string StudentRecordStructType::toString()
{
	ostringstream oss;

	oss << "Name    : " << name << endl;
	oss << "Address : " << address << endl;
	oss << "GPA     : " << gpa << endl;

	return (oss.str());
}

// global array of struct
StudentRecordStructType *globalArray;

int main ()
{
	globalArray = new StudentRecordStructType [3];

	globalArray [0].name = "April";
	globalArray [1].name = "May";
	globalArray [2].name = "June";

	globalArray [0].address = "38 Jade Park";
	globalArray [1].address = "68 Crystal Shore";
	globalArray [2].address = "98 Emerald Forest";

	globalArray [0].gpa = 3.38;
	globalArray [1].gpa = 3.58;
	globalArray [2].gpa = 3.88;

	for (int i=0; i<3; i++)
		cout << globalArray [i].toString() << endl;

	return (0);
}

