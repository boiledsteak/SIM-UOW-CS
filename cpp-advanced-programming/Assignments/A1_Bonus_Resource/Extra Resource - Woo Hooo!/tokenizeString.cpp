
#include <string>
#include <iostream>
#include <vector>

using namespace std;

// g++ -std=c++11 tokenizeString.cpp -o tokenizeString.exe

vector<string> tokenizeString (string input, string delimiter)
{
	size_t pos = 0;
	string token;
	vector<string> result;

	while ((pos = input.find(delimiter)) != string::npos) 
	{
    	token = input.substr(0, pos);
    	result.push_back (token);
		input.erase(0, pos + delimiter.length());
	}

	result.push_back (input);

	return (result);
}

int main ()
{ 

// -----------------------------------------------

	string example1 = "A_Range=0-18";
	vector<string> tokenStringVector = tokenizeString (example1, "=");

	cout << endl;
	for (int i=0; i<tokenStringVector.size(); i++)
		cout << tokenStringVector [i] << endl;
	cout << endl;

// -----------------------------------------------

	tokenStringVector.clear();
	string example2 = "0-18";

	tokenStringVector = tokenizeString (example2, "-");
	cout << endl;
	for (int i=0; i<tokenStringVector.size(); i++)
		cout << tokenStringVector [i] << endl;
	cout << endl;

// -----------------------------------------------

   return (0);
}



