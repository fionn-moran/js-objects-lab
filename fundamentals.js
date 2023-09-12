const aCar = {
    owner : "Joe Bloggs",
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
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log(' Reg. = ' + aCar.registration.Year + aCar.registration.County + aCar.registration.Number)
