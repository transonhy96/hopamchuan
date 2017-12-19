const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SongSchema = new Schema({
            name:{
                type:String,
                required:true
            },
            singer:{
                type:Array,
                required:true
            },
            chord_lyric:{
                type:Array,
                required:true
            },
            search_count:{
                type:Number,
                required:true,
                default:0
            },
            main_tone:{
                type:String,
                required:true
            },
            used_chords:{
                type:Array,
                required:true
            },
            postser:{
                type:String,
                required:false
            },
            link:{
                type:String,
                required:true
            }
});




// module.exports = getSongById = function(id,callback){

//     Song.findById(id,callback);
// }
// module.exports = getSongByName = function(name,callback){

//     let query = {name:name}; // vi cai findOne() n yeu cau 1 object query 
//      Song.findOne(query,callback);
// }
// module.exports = getSongs = function (callback){
//     Song.find(callback);
// }
// module.exports = getSongBySinger = function (singer,callback){
//     let query = {singer:singer};
//     return  Song.findOne(query,callback);
// }
// module.exports = getTopX = function (x,callback){
//     return 
// }
const Song = module.exports = mongoose.model('songs',SongSchema);