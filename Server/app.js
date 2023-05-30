const Geoobject = [
  {
    geometry: { coordinates: [121.060764, 24.79054], type: "point" },
    properties: {
      id: "No113",
      road: " 東興​路​二​段 ",
      carSpeed: 90,
      speedLimit: 60,
      GPStime: "Sat, 27 May 2023 05:54:50 GMT",
      overSpeedLimit: "Serious_Violation",
    },
    _id: "new ObjectId(64719b2beca5d939baffe35e)",
    type: "Feature",
    __v: 0,
  },
  {
    geometry: { coordinates: [121.060764, 24.79054], type: "point" },
    properties: {
      id: "No113",
      road: " 東興​路​二​段 ",
      carSpeed: 70,
      speedLimit: 60,
      GPStime: "Sat, 27 May 2023 05:54:50 GMT",
      overSpeedLimit: "Serious_Violation",
    },
    _id: "new ObjectId(64719b2beca5d939baffe35e)",
    type: "Feature",
    __v: 0,
  },
];

function deleteID(documents) {
  documents.forEach(function (document) {
    // Remove the _id field
    document._id = document._id.toString();
    // Do something with the modified document
  });
  return documents[0];
}

console.log(deleteID(Geoobject));
