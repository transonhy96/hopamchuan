const express = require('express');
const router = express.Router();
const Song = require('../models/songs');
const Singer = require('../models/singer');


//Song

router.get('/songs',(req,res,next)=>{
   Song.find().then(songs =>{
       res.send(songs);
   }).catch(next);
});
router.get('/songs/:id',(req,res,next)=>{
    let id = req.params.id;
    Song.findById(id).then(song=>{
        res.send(song);
    }).catch(next);
});
router.get('/songs/name/:name',(req,res,next)=>{
    let name_alias = req.params.name;
    let query = {name_alias:name_alias};
    Song.findOne(query).then(song=>{
        res.send(song);
    }).catch(next);
});

router.get('/songs/top/:x',(req,res,next)=>{
    let x =(Number)(req.params.x);

    Song.find().limit(x).sort({"search_count": -1 }).then(songs=>{
        res.status(200).send(songs);
    })
    .catch(next);
});

router.post('/songs',(req,res,next)=>{
    Song.create(req.body)
    .then(song=>{
        res.status(201).send(song);
    })  
    .catch(next);
});
router.patch('/songs/update_count/:id',(req,res,next)=>{
    let id = req.params.id;
    Song.findById(id)
    .then((song)=>{
        let search_count = song.search_count +1;
        song.update({"search_count":search_count}).then((song)=>{
            res.status(200).send({"msg":"Update success"})
        });
        
    })
    .catch(next);
});

// Singer

router.get('/singers',(req,res,next)=>{
    Singer.find().then((singers)=>{
        res.status(200).send(singers);
    }).catch(next);
});
router.get('/singer/name?=',(req,res,next)=>{
    let query = {name_alias:req.params.name};
        Singer.findOne(query)
            .then(singer=>{
                res.status(200).send(singer);
            })
            .catch(next);

});
router.get('/singer/id?=',(req,res,next)=>{
    let id= req.params.id;
        Singer.findById(id)
            .then(singer=>{
                res.status(200).send(singer);
            })
            .catch(next);

});
router.post('/singers',(req,res,next)=>{
    Singer.create(req.body)
        .then(singer=>{
            res.status(201).send(singer)
        .catch(next);
    });
});

module.exports = router;