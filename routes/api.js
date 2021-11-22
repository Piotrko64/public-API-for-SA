const express= require('express');
const router = express.Router();

const tracksActions = require('../actions/api/noteActions');
// all
router.get('/allTracks', tracksActions.allTracks);
// Ambience
router.get('/onlyAMB', tracksActions.ambTracks);
router.get('/tagsAMB', tracksActions.ambTags);
// Sound Effects
router.get('/onlySE', tracksActions.seTracks);
router.get('/tagsSE', tracksActions.seTags);

module.exports = router;