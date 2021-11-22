const mongoose = require('mongoose');

const postTrack = new mongoose.Schema({
    type:{
        type: String,
        required: true
    },
    iframe:{
        type: String,
        required: true
    },
    href:{
        type: String,
        required: false
    },
    describe:{
        type: String,
        required: false
    },
    title:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        required: true
    },
    tag:{
        type: Array,
        required: true
    },
})


const Note = mongoose.model('Track',postTrack);

module.exports = Note;