print('Solution for CSCI235 assignment 3 task1');
print('============================');
print('Student number: 10258663'    );
print('Name: Timothy Mah'         );
print('============================');
print(''); // newline spacing
// this file is meant to be run in mongo shell
// i used mongo atlas and compass so my output may be a bit different then using a local mongo db instance
// qn1
print('(1) Create a new MongoDB database with a name that is the same as your UOW student number');
print(''); // newline spacing
print('use("8750634");');
print(''); // newline spacing
use('8750634');
print(''); // newline spacing
// qn2
print('(2) Create a collection with a name the same as the prefix of your UOW email address');
print(''); // newline spacing
print('db.createCollection("txam346");');
print(''); // newline spacing
db.createCollection("txam346")
print(''); // newline spacing
// qn3
print('(3) Insert into the collection the documents whose contents are consistent with the conceptual schema given above. It is important that your documents represent the hierarchical structures in the best possible way. You do not need to enforce all identification constraints determined in the conceptual schema. Insert at least two airlines, two published-flight, three flight-detail, and three airports involving the airlines; each airline publishes two published-flight, and each published-flight has two flight details');
print(''); // newline spacing
print('db.txam346.insertMany([ { AIRLINE: { IATA: "SQ", name: "Singapore Airlines", PUBLISHED_FLIGHT: [ { flightNumber: "SQ123", effectiveDate: "2023-05-20", expiryDate: "2024-05-20", frequency: "2", FLIGHT_DETAIL: [ { scheduledDepartureDate: "2024-05-20", scheduledDepartureTime: "13:00", scheduledDuration: "5", AIRPORT_FROM: { IATA: "SIN", name: "Singapore Changi Airport" }, AIRPORT_TO: { IATA: "CKG", name: "Chongqing Jiangbei International Airport" } } ] }, { flightNumber: "SQ456", effectiveDate: "2023-06-10", expiryDate: "2024-06-10", frequency: "3", FLIGHT_DETAIL: [ { scheduledDepartureDate: "2024-06-10", scheduledDepartureTime: "14:00", scheduledDuration: "4", AIRPORT_FROM: { IATA: "SIN", name: "Singapore Changi Airport" }, AIRPORT_TO: { IATA: "DMK", name: "Don Muang Airport" } }, { scheduledDepartureDate: "2024-06-11", scheduledDepartureTime: "10:00", scheduledDuration: "3", AIRPORT_FROM: { IATA: "DMK", name: "Don Muang Airport" }, AIRPORT_TO: { IATA: "STV", name: "Surat International Airport" } } ] } ] } }, { AIRLINE: { IATA: "EK", name: "Emirates", PUBLISHED_FLIGHT: [ { flightNumber: "EK789", effectiveDate: "2023-05-25", expiryDate: "2024-05-25", frequency: "1", FLIGHT_DETAIL: [ { scheduledDepartureDate: "2024-05-25", scheduledDepartureTime: "08:00", scheduledDuration: "6", AIRPORT_FROM: { IATA: "HLP", name: "Halim Perdana Kusuma Airport Jakarta" }, AIRPORT_TO: { IATA: "KUL", name: "Kuala Lumpur International Airport" } } ] }, { flightNumber: "EK987", effectiveDate: "2023-06-15", expiryDate: "2024-06-15", frequency: "2", FLIGHT_DETAIL: [ { scheduledDepartureDate: "2024-06-15", scheduledDepartureTime: "10:00", scheduledDuration: "5", AIRPORT_FROM: { IATA: "KUL", name: "Kuala Lumpur International Airport" }, AIRPORT_TO: { IATA: "DMK", name: "Don Muang Airport" } }, { scheduledDepartureDate: "2024-06-16", scheduledDepartureTime: "12:00", scheduledDuration: "4", AIRPORT_FROM: { IATA: "DMK", name: "Don Muang Airport" }, AIRPORT_TO: { IATA: "STV", name: "Surat International Airport" } } ] } ] } } ]);');
print(''); // newline spacing
db.txam346.insertMany([
    {
        AIRLINE: 
        { 
          IATA: "SQ",
          name: "Singapore Airlines",
          PUBLISHED_FLIGHT: [
            {
                flightNumber: "SQ123",
                effectiveDate: "2023-05-20",
                expiryDate: "2024-05-20",
                frequency: "2",
                FLIGHT_DETAIL: [
                    {
                        scheduledDepartureDate: "2024-05-20",
                        scheduledDepartureTime: "13:00",
                        scheduledDuration: "5",
                        AIRPORT_FROM: { IATA: "SIN", name: "Singapore Changi Airport" },
                        AIRPORT_TO: { IATA: "CKG", name: "Chongqing Jiangbei International Airport" }
                    }
                ]
            },
            {
                flightNumber: "SQ456",
                effectiveDate: "2023-06-10",
                expiryDate: "2024-06-10",
                frequency: "3",
                FLIGHT_DETAIL: [
                    {
                        scheduledDepartureDate: "2024-06-10",
                        scheduledDepartureTime: "14:00",
                        scheduledDuration: "4",
                        AIRPORT_FROM: { IATA: "SIN", name: "Singapore Changi Airport" },
                        AIRPORT_TO: { IATA: "DMK", name: "Don Muang Airport" }
                    },
                    {
                        scheduledDepartureDate: "2024-06-11",
                        scheduledDepartureTime: "10:00",
                        scheduledDuration: "3",
                        AIRPORT_FROM: { IATA: "DMK", name: "Don Muang Airport" },
                        AIRPORT_TO: { IATA: "STV", name: "Surat International Airport" }
                    }
                ]
            }
        ] }
    },
    {
        AIRLINE: 
        { 
          IATA: "EK",
          name: "Emirates",
          PUBLISHED_FLIGHT: [
            {
                flightNumber: "EK789",
                effectiveDate: "2023-05-25",
                expiryDate: "2024-05-25",
                frequency: "1",
                FLIGHT_DETAIL: [
                    {
                        scheduledDepartureDate: "2024-05-25",
                        scheduledDepartureTime: "08:00",
                        scheduledDuration: "6",
                        AIRPORT_FROM: { IATA: "HLP", name: "Halim Perdana Kusuma Airport Jakarta" },
                        AIRPORT_TO: { IATA: "KUL", name: "Kuala Lumpur International Airport" }
                    }
                ]
            },
            {
                flightNumber: "EK987",
                effectiveDate: "2023-06-15",
                expiryDate: "2024-06-15",
                frequency: "2",
                FLIGHT_DETAIL: [
                    {
                        scheduledDepartureDate: "2024-06-15",
                        scheduledDepartureTime: "10:00",
                        scheduledDuration: "5",
                        AIRPORT_FROM: { IATA: "KUL", name: "Kuala Lumpur International Airport" },
                        AIRPORT_TO: { IATA: "DMK", name: "Don Muang Airport" }
                    },
                    {
                        scheduledDepartureDate: "2024-06-16",
                        scheduledDepartureTime: "12:00",
                        scheduledDuration: "4",
                        AIRPORT_FROM: { IATA: "DMK", name: "Don Muang Airport" },
                        AIRPORT_TO: { IATA: "STV", name: "Surat International Airport" }
                    }
                ]
            }
        ] }
    }
]);
print(''); // newline spacing
// qn4
print('(4) List the contents of the collection created in step (2) and loaded with the documents in a step (3) in a pretty format');
print(''); // newline spacing
print('db.txam346.find().pretty();');
print(''); // newline spacing
db.txam346.find().pretty();
print(''); // newline spacing
print('END');