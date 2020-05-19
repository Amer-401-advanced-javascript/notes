'use strict';

const Input = require('./../lib/input');

describe('Input module', ()=> {
  it('validateUserInput() returns object with wrong entry in case of bad inputs ', () =>{
    let addNote = new Input();
    expect(addNote.validateUserInput('')).toEqual({action : 'Wrong entry', payload : 'Wrong entry'});
  });
  it('validateUserInput() returns object with the input in case of good entry', ()=>{
    let addNote = new Input();
    expect(addNote.validateUserInput({_:[],add:'added'})).toEqual({action : 'add', payload : 'added'});
  });
  it('valid() give true value when the input is correct', () =>{
    let addNote = new Input();
    expect(addNote.valid('a')).toBeTruthy();
  });
  it('valid() give false value when the input is incorrect', () =>{
    let addNote = new Input();
    expect(addNote.valid('sd')).toBeFalsy();
  });
});

