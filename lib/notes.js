'use strict';

const mongoose = require('mongoose');
const notes = require('../model/notes-collection');
const noteOp = new notes;
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
      }else if(noteAction.action === 'update'){
        this.update(noteAction);
      } else{
        console.error( 'this operation is not supported yet' );
        mongoose.disconnect();
      }
    }
  }

  async add( addNote ) {
    if(addNote){
      // console.log(addNote);
      let addObject = {
        text : addNote.payload,
        category : addNote.category};

      noteOp.create(addObject).then(data =>{
        console.log( `You have registered a note with an ID of ${data._id} saying that ${data.text}` );
        mongoose.disconnect();
      });
    }
  }

  async delete(deleteNote){    
    console.log(deleteNote.payload);
    noteOp.delete(deleteNote.payload).then(data => {
      if (data){
        console.log(`The note with an ID of ${data._id} has been deleted`);
      } else {
        console.log('This ID doesn\'t exist');
      }
      mongoose.disconnect();
    });
  }

  async list(listCategory){

    if(listCategory.payload === true){
      noteOp.get().then(data => {        
        data.forEach(value =>{      
          console.log(`  ${value.text},  Category: ${value.category}, ID: ${value._id }\n`);
          mongoose.disconnect();
        });
      });
    } else {         
      noteOp.get( listCategory.payload).then(data => {        
        data.forEach(value =>{      
          console.log(`  ${value.text}  Category: ${value.category} , ID: ${value._id }\n`);
          mongoose.disconnect();
        });
      });
    }
  }

  async update(updateData){
    console.log(updateData, 'ssdsdsds');
    
    // noteOp.update()
  }

}

module.exports= Execution;