'use strict';

const mongoose = require('mongoose');
const notes = require('../model/notes');

class Execution {

  constructor( addNote ) {
    // console.log(addNote);
    
    this.executeAddition = this.execute(addNote);
  }
  
  execute( noteAction ) {
    if(noteAction){
      if ((noteAction.action === 'add') || (noteAction.action === 'a')){
        this.add( noteAction );
      } else if (noteAction.action === 'delete'){
        this.delete(noteAction);
      } else if (noteAction.action === 'list'){
        this.list(noteAction);
      } else{
        console.error( 'this operation is not supported yet' );
      }
    }
  }

  async add( addNote ) {
    if(addNote){
      // console.log(addNote);
      let addObject = {
        text : addNote.payload,
        category : addNote.category};

      let record = new notes( addObject );
      await record.save();
      let displayNotes = await notes.find({text : addObject.text});
      // console.log('dsdsd',displayNotes);
      console.log( `You have registered a note with an ID of ${displayNotes[0]._id} saying that ${addObject.text}` );
      mongoose.disconnect();
    }
  }

  async delete(deleteNote){    
    await notes.findByIdAndDelete(deleteNote.delete);
    await notes.find({});
    mongoose.disconnect();
    
  }
  async list(listCategory){

    if(listCategory.list === true){
      let displayAllNotes = await notes.find({});
      displayAllNotes.forEach(value =>{      
        console.log(`  ${value.text},  Category: ${value.category}, ID: ${value._id }\n`);
        mongoose.disconnect();
      });
    } else {      
      let displayAllNotes = await notes.find({ category : listCategory.list });
      displayAllNotes.forEach(value =>{      
        console.log(`  ${value.text}  Category: ${value.category} , ID: ${value._id }\n`);
        mongoose.disconnect();
      });
    }
  }

}

module.exports= Execution;