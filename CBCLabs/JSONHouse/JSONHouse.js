let KeilHouse =
{
  "numberOfBedrooms":4,
  "numberOfBathrooms": 3,
  "Krooms":
  [
    { "name":"office",
      "computer1":"off",
      "fan":"off",
      "flooring":"carpet",
      "windows":"closed",
      "door":"closed"
    },
    { "name":"kitchen",
      "oven":"off",
      "refrigerator":"empty",
      "dishes":"clean",
      "windows":"closed",
      "door":"no door"
    },
    { "name":"livingRoom",
      "Darla":"on the rug",
      "floor": "dirty",
      "windows":"open",
      "door":"closed"
    },
    { "name":"masterBedroom",
      "bed":"unmade",
      "floor":"temporary clothes storage",
      "windows":"closed",
      "door":"closed"
    }
  ]
};

toggleWindows = (rooms) =>
{
  for(let i=0; i<rooms.length; i++)
  {
  if (rooms[i].windows === "open")
    {
      rooms[i].windows="closed";
    }
  else
    {
      rooms[i].windows="open";
    }
  }
console.log(KeilHouse);
}




console.log("JsonHouse.js loaded correctly.");
