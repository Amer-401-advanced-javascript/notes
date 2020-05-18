'use strict';

const Input = require('./lib/input');
const Execution = require('./lib/notes');

const addNote = new Input();

new Execution(addNote);
