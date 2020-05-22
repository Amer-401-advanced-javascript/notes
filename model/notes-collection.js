'use strict';

const schema = require('./notes');


class Notes{

  constructor(){

  }

  async get(category){
    if (category){
      return await schema.find({category : category});
    } else {
      return await schema.find({});
    }
  }

  async create( record ){
    let newNoteRecord = new schema(record);
    return await newNoteRecord.save();
  }
    
  async update(id, updatedRecord){
    return await schema.findByIdAndUpdate(id, updatedRecord);
  }

  async delete(id){
    return await schema.findByIdAndDelete(id);
  }
}


module.exports = Notes;