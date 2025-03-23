function compareRobots(firstRobotResults, secondRobotResults) {

    let sumOfFirsRobot = 0;
    let sumOfSecondRobot = 0;
  
    for(let i = 0; i < firstRobotResults.length; i++){
      sumOfFirsRobot += firstRobotResults[i];  
    }
    for(let i = 0; i < secondRobotResults.length; i++){
      sumOfSecondRobot += secondRobotResults[i];
    }
    if(sumOfFirsRobot > sumOfSecondRobot){
      return('First robot for sale!');
    
    }else if(sumOfSecondRobot > sumOfFirsRobot){
      return('Second robot for sale!')
  
    }else{
      return('Both robots for sale!')
    }
  }
