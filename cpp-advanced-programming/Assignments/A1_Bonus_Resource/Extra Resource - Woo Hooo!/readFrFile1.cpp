
#include <string>
#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

// g++ -std=c++11 readFrFile1.cpp -o readFrFile1.exe

void readAFile (string filename);

int main ()
{ 
	cout << endl;
    cout << "Please enter input filename : ";

    string inputFilename;

	// when prompted, pls type in 'input.txt'
    cin >> inputFilename;

    fstream inputFile (inputFilename.c_str(), fstream::in);

    string aLine;

    cout << endl;
    while (getline (inputFile, aLine))
    {
		cout << aLine << endl;

		size_t pos = aLine.find(".txt");

		if (pos != string::npos)
			readAFile (aLine);

	}
	cout << endl;

	return (0);
}


void readAFile (string filename)
{
    fstream inputFile (filename.c_str(), fstream::in);

	cout << endl;
	cout << "Reading contents of file : " << filename << endl;
	cout << endl;

	string aLine;

    while (getline (inputFile, aLine))
    {
		cout << aLine << endl;

	}
	cout << endl;
}







