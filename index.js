const express = require('express');
const app=express();
const {port} = require('./config');
require('./database/mongoose');
const cors=require('cors');
const apiRouter = require("./routes/api");
const bodyParser = require('body-parser');

app.use(express.json())

// body parser
app.use(bodyParser.json())
var corsOptions = {
    origin: true,
    }
app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send(`# API-for-SA

    ALL TRACKS
    </br>
    </br>
    - read/allTracks
    </br>
    </br>
    AMBIENCE
    </br>
    </br>
    - read/onlyAMB 
    </br>
    - read/tagsAMB <--only tags for Ambience
    </br>
    </br>
    Sound Effects
    </br>
    </br>
    - read/onlySE
    </br>
    - read/tagsSE <--only tags for Sound Effects"`)
})

app.use('/read', apiRouter)


app.listen(port,()=>{
    console.log("I am listen")
})