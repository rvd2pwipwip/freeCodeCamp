// Setup
var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop !== "tracks" && value) {
    collectionCopy[id][prop] = value;
  }

  if (!collectionCopy[id].hasOwnProperty("tracks")) {
    collectionCopy[id].tracks = [];
  }

  if (value) collectionCopy[id].tracks.push(value);
  else delete collectionCopy[id][prop];

  collection = collectionCopy;
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "");
// updateRecords(1245, "artist", "");

console.log(collection[5439]);
console.log(collection[1245]);
