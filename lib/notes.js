'use strict';

function Execution(addNote){
//   console.log(addNote.userInput,'llll');
  this.executeAddition = this.execute(addNote.userInput);  
}

Execution.prototype.execute = function(addNote){
 
  if ((addNote.action === 'add') || (addNote.action === 'a')){
    Execution.prototype.add = function(addNote){
      let id = Math.ceil(Math.random()*500);
      let addObject = {
        ID : id,
        text : addNote.payload};

      console.log(`You have regstered a note with an ID of ${addObject.ID} saying that ${addObject.text}`);
    };
    this.add(addNote);
  } else{
    console.error('this operation is not supported yet');  
  }
};

module.exports= Execution;