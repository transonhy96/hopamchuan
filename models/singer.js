const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SingerSchema = new Schema({
            name:{
                type:String,
                required:true
            },
            
            songs:{
                type:Array,
                required:true
            },
            link:{
                type:String,
                required:true
            },
            name_alias:{
                type:String,
                required:true
            }
});
const Singer = module.exports = mongoose.model('singers',SingerSchema);
