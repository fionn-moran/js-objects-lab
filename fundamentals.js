const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
    { name: "Pat Smith", address: "1 Main Street" },
    { name: "Sheila Dwyer", address: "2 High Street" }
      ],
    type : { Make : 'Toyota',
             Model : ' Corolla ',
             CC : ' 1.8'
},
    registration : {
        Year : '201',
        County : 'WD',
        Number : '1058'
    }
  };

  aCar.mileage = '10000' ;

  aCar.colour = {
    exteriorColour : 'red',
    interiorFabric : {texture: 'leather', shade: 'cream'}
  }
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log(' Reg. = ' + aCar.registration.Year + aCar.registration.County + aCar.registration.Number)
  console.log("It is a " + aCar.colour.exteriorColour + " car, " + aCar.mileage + " mileage, with " + aCar.colour.interiorFabric.texture + " interior.");
  console.log('First owner : ' + aCar.previous_owners[0].name + aCar.previous_owners[0].address )