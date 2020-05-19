'use strict';

const Execution = require('./../lib/notes');

jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it('execute() with wrong inputs', ()=> {
    let exe = new Execution();
    exe.add();
    expect(console.log).not.toHaveBeenCalled;
  });
});