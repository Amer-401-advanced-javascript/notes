'use strict';

const notesAction = require('../model/notes-collection');
const supergoose = require('@code-fellows/supergoose');

const noteOperation = new notesAction();

describe('Notes Model', ()=>{
  it('can create() new note', () =>{
    let newNote = noteOperation.create({text : 'test1' , category : 'categoryTest'});

    
    
  });
});

