function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
    return someValue - 42
    }
    if (someValue < 42) {
        return (42- someValue)
    }
    
  }

  function distanceFromHqInFeet(someValue) {
   return  (distanceFromHqInBlocks(someValue) * 264);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return ((destination - start) *264)
    }
    if (destination < start) {
        return ((start - destination)*264)
    }
    
  }


  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination) 
    
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500){
        return 25
    } else   {
        return "cannot travel that far"
    }
        

    //returns the fare for the customer
  }