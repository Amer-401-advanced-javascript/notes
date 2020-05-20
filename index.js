'use strict';

const mongoose = require('mongoose');
const Input = require('./lib/input');
const Execution = require('./lib/notes');
const DB_URI = 'mongodb://localhost:27017/fetch';

mongoose.connect(DB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true});

const addNote = new Input();

new Execution(addNote);
