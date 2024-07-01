print('Solution for CSCI235 implementation task 3 task1');
print('============================');
print('Student number: 10258663'    );
print('Name: Timothy Mah'         );
print('============================');
print('');
// this file is meant to be run in mongo shell
// i used mongo atlas and compass so my output may be a bit different then using a local mongo db instance
use('db');
// qn1
print('(1) Display in a pretty format information about an employee number 11. Do not list information about trips performed by the employee');
print(''); // newline spacing
print('db.transport.find({ "EMPLOYEE.e#": "11" }, { "EMPLOYEE.trips": 0 }).pretty();');
print(''); // newline spacing
db.transport.find(
	{ "EMPLOYEE.e#": "11" },
	{
		"EMPLOYEE.trips": 0
	}
).pretty();
print(''); // newline spacing
// qn2
print('(2) Display in a pretty format information about all mechanics. For each mechanic list only employee number, name, and position');
print(''); // newline spacing
print('db.transport.find({ "EMPLOYEE.position": "mechanic" }, { "EMPLOYEE.e#": 1, "EMPLOYEE.name": 1, "EMPLOYEE.position": 1, _id: 0 }).pretty();');
print(''); // newline spacing
db.transport.find(
	{ "EMPLOYEE.position": "mechanic" },
  	{
		"EMPLOYEE.e#": 1,
		"EMPLOYEE.name": 1,
		"EMPLOYEE.position": 1,
		_id: 0
  	}
).pretty();
print(''); // newline spacing
// qn3
print('(3) Display in a pretty format information about the trucks with the registration numbers PKR768 and PKR008 and SST005. Do not list identifiers of the documents');
print(''); // newline spacing
print('db.transport.find({ "TRUCK.registration": { $in: ["PKR768", "PKR008", "SST005"] } }, { _id: 0 }).pretty();');
print(''); // newline spacing
db.transport.find(
	{ "TRUCK.registration": { $in: ["PKR768", "PKR008", "SST005"] } },
	{ _id: 0 }
).pretty();
print(''); // newline spacing
// qn4
print('(4) Find the total number of employees');
print(''); // newline spacing
print('db.transport.find({ "EMPLOYEE": { $exists: true } }).count();');
print(''); // newline spacing
db.transport.find({ "EMPLOYEE": { $exists: true } }).count();
print(''); // newline spacing
// qn5
print('(5) Find the total number of mechanics');
print(''); // newline spacing
print('db.transport.find({ "EMPLOYEE.position": "mechanic" }).count();');
print(''); // newline spacing
db.transport.find({ "EMPLOYEE.position": "mechanic" }).count();
print(''); // newline spacing
// qn6
print('(6) Display in a pretty format the names and positions of all employees');
print(''); // newline spacing
print('db.transport.find({ "EMPLOYEE": { $exists: true } }, { "EMPLOYEE.name": 1, "EMPLOYEE.position": 1, _id: 0 }).pretty();');
print(''); // newline spacing
db.transport.find(
	{ "EMPLOYEE": { $exists: true } },
	{ 
		"EMPLOYEE.name": 1,
		"EMPLOYEE.position": 1,
		_id: 0 
	}
).pretty();
print(''); // newline spacing
// qn7
print('(7) Display in a pretty format the registrations number of all trucks maintained by John Fox. there is no need to remove duplicates from a listing');
print(''); // newline spacing
print('db.transport.aggregate([ { $match: { "EMPLOYEE.name": "John Fox" } }, { $unwind: "$EMPLOYEE.maintenances" }, { $group: { _id: "$EMPLOYEE.maintenances.registration" } }, { $project: { registration: "$_id", _id: 0 } } ]).pretty();');
print(''); // newline spacing
db.transport.aggregate([
  {
    $match: { "EMPLOYEE.name": "John Fox" }
  },
  {
    $unwind: "$EMPLOYEE.maintenances"
  },
  {
    $group: {
      _id: "$EMPLOYEE.maintenances.registration"
    }
  },
  {
    $project: {
      registration: "$_id",
      _id: 0
    }
  }
]).pretty();
print(''); // newline spacing
// qn8
print('(8) Display in a pretty format the names of mechanics who maintained a car with a registration LUCY01.');
print(''); // newline spacing
print('db.transport.aggregate([ { $match: { "EMPLOYEE.maintenances.registration" : "LUCY01"   } }, { $group: { _id: "$EMPLOYEE.name" } }, { $project: { name: "$_id", _id: 0 } } ]).pretty();');
print(''); // newline spacing
db.transport.aggregate([
  {
  	$match: { "EMPLOYEE.maintenances.registration" : "LUCY01"   }
  },
  {
    $group: {
      _id: "$EMPLOYEE.name"
    }
  },
  {
    $project: {
      name: "$_id",
      _id: 0
    }
  }
]).pretty();
print(''); // newline spacing
// qn9
print('(9) Display in a pretty format the names of drivers who performed no trips so far');
print(''); // newline spacing
print('db.transport.aggregate([ { $match: { "EMPLOYEE.maintenances": { $exists: false } } }, { $group: { _id: "$EMPLOYEE.name" } }, { $project: { name: "$_id", _id: 0 } } ]).pretty();');
print(''); // newline spacing
db.transport.aggregate([
	{
	    $match: {
	      "EMPLOYEE.maintenances": { $exists: false }
	    }
  	},
	{
		$group: {
	      _id: "$EMPLOYEE.name"
	    }
	},
	{
		$project: {
		  name: "$_id",
		  _id: 0
		}
	}
]).pretty();
print(''); // newline spacing
// qn10
print('(10) Display in a pretty format names of drivers who started at least on trip in Wollongong');
print(''); // newline spacing
print('db.transport.aggregate([ { $match: { "EMPLOYEE.maintenances": { $exists: true } } }, { $group: { _id: "$EMPLOYEE.name" } }, { $project: { name: "$_id", _id: 0 } } ]).pretty();');
print(''); // newline spacing
db.transport.aggregate([
	{
	    $match: {
	      "EMPLOYEE.maintenances": { $exists: true }
	    }
  	},
	{
		$group: {
	      _id: "$EMPLOYEE.name"
	    }
	},
	{
		$project: {
		  name: "$_id",
		  _id: 0
		}
	}
]).pretty();
print(''); // newline spacing
print('END'); 