'use strict';

const minimist = require('minimist');

function Input(){
  //capturing the args
  const args = minimist(process.argv.slice(2));
  this.userInput = this.validateUserInput(args);
}

Input.prototype.validateUserInput= (userInput) =>{
  
  let inputKey = Object.keys(userInput)[1];
  let inputValue = Object.values(userInput)[1];


  let validateAction = /^a|add/g;
  // console.log(validateAction.test ( inputKey ));
  
  if( validateAction.test ( inputKey ) && ( inputValue !== '' ) ) {    
    return {action : inputKey, payload : inputValue};
  }else{
    // console.error('Didnt stick to the required formate which is (--add/--a="add your note here")');
    return {action : 'Wrong entry', payload : 'Wrong entry'};
  } 
};

module.exports=Input;