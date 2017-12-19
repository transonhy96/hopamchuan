const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TestSchema = new Schema({
            name:{
                type:String,
                require:true
            },
            singer:{
                type:Array,
                require:true
            }
});
const Test = module.exports = mongoose.model('test',TestSchema);



