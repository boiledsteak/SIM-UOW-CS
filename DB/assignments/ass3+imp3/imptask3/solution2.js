print('Solution for CSCI235 implementation task 3 task2');
print('============================');
print('Student number: 10258663'    );
print('Name: Timothy Mah'         );
print('============================');
print('');
// this file is meant to be run in mongo shell
// i used mongo atlas and compass so my output may be a bit different then using a local mongo db instance
use('db');
// qn1
print('(1) Remove a mechanic John Fox');
print(''); // newline spacing
print('db.transport.deleteOne({ "EMPLOYEE.name": "John Fox"});');
print(''); // newline spacing
db.transport.deleteOne({ "EMPLOYEE.name": "John Fox"});
print(''); // newline spacing
// qn2
print('(2) Remove information about a date of birth (dob) from a description of employee number 11');
print(''); // newline spacing
print('db.transport.updateOne( { "EMPLOYEE.e#": "11" }, { $unset: { "EMPLOYEE.dob": "" } } );');
print(''); // newline spacing
db.transport.updateOne(
    { "EMPLOYEE.e#": "11" },
    { $unset: { "EMPLOYEE.dob": "" } }
  );
print(''); // newline spacing
// qn3
print('(3) Remove information about a trip number 7 performed by an employee number 11');
print(''); // newline spacing
print('db.transport.updateOne( { "EMPLOYEE.e#": "11" }, { $pull: { "EMPLOYEE.trips": { "trip number": "7" } } } );');
print(''); // newline spacing
db.transport.updateOne(
    { "EMPLOYEE.e#": "11" },
    { $pull: { "EMPLOYEE.trips": { "trip number": "7" } } }
  );
print(''); // newline spacing
// qn4
print('(4) Add information about a new trip performed by an employee number 11. At the moment we only know a trip number 999 and registration of truck used PKR786');
print(''); // newline spacing
print('db.transport.updateOne( { "EMPLOYEE.e#": "11" }, { $push: { "EMPLOYEE.trips": { "trip number": 999, "registration": "PKR786" } } } );');
print(''); // newline spacing
db.transport.updateOne(
    { "EMPLOYEE.e#": "11" },
    {
      $push: {
        "EMPLOYEE.trips": {
          "trip number": 999,
          "registration": "PKR786"
        }
      }
    }
  );
print(''); // newline spacing
// qn5
print('(5) Change a date of a trip number 15 performed by an employee number 11 to 28-SEP-18');
print(''); // newline spacing
print('db.transport.updateOne( { "EMPLOYEE.e#": "11", "EMPLOYEE.trips.trip number": "15" }, { $set: { "EMPLOYEE.trips.$.trip date": "28-SEP-18" } } );')
print(''); // newline spacing
db.transport.updateOne(
  { 
    "EMPLOYEE.e#": "11", 
   "EMPLOYEE.trips.trip number": "15"
  },
  { 
    $set: { "EMPLOYEE.trips.$.trip date": "28-SEP-18" } 
  }
);
print('');
print('END');