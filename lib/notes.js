'use strict';

class Execution {

  constructor( addNote ) {
    // console.log(addNote);
    
    this.executeAddition = this.execute(addNote);
  }
  
  execute( addNote ) {
    if(addNote){
      if ((addNote.action === 'add') || (addNote.action === 'a')){
        this.add( addNote );
      } else{
        console.error( 'this operation is not supported yet' );
      }
    }
  }

  add( addNote ) {
    if(addNote){
      let id = Math.ceil(Math.random()*500);
      let addObject = {
        ID : id,
        text : addNote.payload};

      console.log( `You have registered a note with an ID of ${addObject.ID} saying that ${addObject.text}` );
    }

  }
}

module.exports= Execution;