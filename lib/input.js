'use strict';

const minimist = require('minimist');


class Input{
  constructor(){
    const args = minimist(process.argv.slice(2));
    this.action = this.validateUserInput(args).action;
    this.payload = this.validateUserInput(args).payload;
    this.category = args.category;
    this.delete = args.delete;
    this.list = args.list;
  }

  validateUserInput(userInput) {
    console.log('userinput input.js',userInput);
        
    let inputKey = Object.keys(userInput)[1];
    let inputValue = Object.values(userInput)[1];

    let validateAction = /^a|add|delete|list/g;
    this.valid(inputKey);
    if( validateAction.test ( inputKey ) && ( inputValue !== '' ) ) {    
      return {action : inputKey, payload : inputValue};
    }else{
      return {action : 'Wrong entry', payload : 'Wrong entry'};
    } 
  }

  valid(userInput){
    if((userInput === 'add' || userInput === 'a' || userInput === 'delete' || userInput === 'list' )){
      return true;
    } else{   
      return false;
    }
  }
}

module.exports=Input;