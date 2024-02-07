/*

 Testing Criteria Revealed!

 You are to compile this file 'testScalarDiff.cpp', with YOUR files : 
 Point2D.cpp Point3D.cpp Line2D.cpp Line3D.cpp MyTemplates.h in the same directory!

 g++ Point2D.cpp Point3D.cpp Line2D.cpp Line3D.cpp testScalarDiff.cpp

 Hint : refer to the sample output in 'testScalarDiffFnTemplate_Output.txt'
        to see the what your program's output should be, if everything is done correctly

 Tip  : Now that you know how to write test code to test your scalar_difference () function template,
        Can you write one to test equals() function template too?

*/

#include <iostream>
#include <utility>
#include <vector>
#include <math.h>
#include <string>
#include <algorithm>
#include <typeinfo>

#include "MyTemplates.h"
#include "Point2D.h"
#include "Point3D.h"
#include "Line2D.h"
#include "Line3D.h"

using namespace std;

int main ()
{
    cout.setf(ios_base::fixed, ios_base::floatfield);
    cout.precision (3);

    Point2D pt2D_a (2, 8);
    Point2D pt2D_b (5, 10);
    
    Point2D pt2D_c (16, 17);
    Point2D pt2D_d (23, 26);
    
    Line2D line2D_1 (pt2D_a, pt2D_b);
    Line2D line2D_2 (pt2D_c, pt2D_d);
    
    Point2D p2Dtemp;
    Line2D  l2Dtemp;
    double dtemp;
    
    // This program assumes you have overloaded << operator as friend for ALL your classes
    // E.g. 'Point2D', 'Point3D', 'Line2D', 'Line3D'

    cout << endl;
    cout << "pt2D_a   : " << pt2D_a << endl;
    cout << "pt2D_b   : " << pt2D_b << endl;
    cout << "pt2D_c   : " << pt2D_c << endl;
    cout << "pt2D_d   : " << pt2D_d << endl;


    cout << endl;
    cout << "-------------------------------------------------------------" << endl;
    cout << "scalar_difference () for Point2D objects returns the absolute" << endl;
    cout << "difference in distFrOrigin of its 1st and 2nd parameters! " << endl;
    cout << "-------------------------------------------------------------" << endl << endl;

    cout << "scalar_difference (pt2D_a, pt2D_b) returns a 'double' value : ";
    dtemp = scalar_difference (pt2D_a, pt2D_b);
    cout << dtemp << endl << endl;

    cout << "scalar_difference (pt2D_b, pt2D_a) returns a 'double' value : ";
    dtemp = scalar_difference (pt2D_b, pt2D_a);
    cout << dtemp << endl << endl;


    cout << endl;  
    cout << "Line2D_1 is made up of pt2D_a, and pt2D_b" << endl;  
    cout << "line2D_1 : " << line2D_1 << endl;
    cout << endl;  
    cout << "Line2D_2 is made up of pt2D_c, and pt2D_d" << endl;  
    cout << "line2D_2 : " << line2D_2 << endl;
    cout << endl;  

    cout << endl;
    cout << "-------------------------------------------------------------" << endl;
    cout << "scalar_difference () for Line2D objects returns the absolute" << endl;
    cout << "difference in length of its 1st and 2nd parameters! " << endl;
    cout << "-------------------------------------------------------------" << endl << endl;
    
    cout << "scalar_difference (line2D_1, line2D_2) returns a 'double' value : ";
    dtemp = scalar_difference (line2D_1, line2D_2);
    cout << dtemp << endl << endl;

    cout << "scalar_difference (line2D_2, line2D_1) returns a 'double' value : ";
    dtemp = scalar_difference (line2D_2, line2D_1);
    cout << dtemp << endl << endl;
    



    Point3D pt3D_a (29, 38, 15);
    Point3D pt3D_b (15, 10, 13);
    
    Point3D pt3D_c (16, 17, 10);
    Point3D pt3D_d (23, 26, 16);
    
    Line3D line3D_1 (pt3D_a, pt3D_b);
    Line3D line3D_2 (pt3D_c, pt3D_d);
    
    Point3D p3Dtemp;
    Line3D  l3Dtemp;
    
    cout << endl;
    cout << "pt3D_a   : " << pt3D_a << endl;
    cout << "pt3D_b   : " << pt3D_b << endl;
    cout << "pt3D_c   : " << pt3D_c << endl;
    cout << "pt3D_d   : " << pt3D_d << endl;


    cout << endl;
    cout << "-------------------------------------------------------------" << endl;
    cout << "scalar_difference () for Point3D objects returns the absolute" << endl;
    cout << "difference in distFrOrigin of its 1st and 2nd parameters! " << endl;
    cout << "-------------------------------------------------------------" << endl << endl;

    cout << "scalar_difference (pt3D_a, pt3D_b) returns a 'double' value : ";
    dtemp = scalar_difference (pt3D_a, pt3D_b);
    cout << dtemp << endl << endl;

    cout << "scalar_difference (pt3D_b, pt3D_a) returns a 'double' value : ";
    dtemp = scalar_difference (pt3D_b, pt3D_a);
    cout << dtemp << endl << endl;



    cout << endl;  
    cout << "Line3D_1 is made up of pt3D_a, and pt3D_b" << endl;  
    cout << "line3D_1 : " << line3D_1 << endl;
    cout << endl;  
    cout << "Line3D_2 is made up of pt3D_c, and pt3D_d" << endl;  
    cout << "line3D_2 : " << line3D_2 << endl;
    cout << endl;  


    cout << endl;
    cout << "-------------------------------------------------------------" << endl;
    cout << "scalar_difference () for Line3D objects returns the absolute" << endl;
    cout << "difference in length of its 1st and 2nd parameters! " << endl;
    cout << "-------------------------------------------------------------" << endl << endl;

    cout << "scalar_difference (line3D_1, line3D_2) returns a 'double' value : ";
    dtemp = scalar_difference (line3D_1, line3D_2);
    cout << dtemp << endl << endl;

    cout << "scalar_difference (line3D_2, line3D_1) returns a 'double' value : ";
    dtemp = scalar_difference (line3D_2, line3D_1);
    cout << dtemp << endl << endl;
    

    return 0;
}

