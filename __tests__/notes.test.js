'use strict';

const Execution = require('./../lib/notes');

jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it('execute() with wrong inputs', ()=> {
    new Execution();
  });
});