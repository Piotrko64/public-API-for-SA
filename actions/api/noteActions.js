const TRACK = require('../../database/models/Track')

module.exports={
  // all
  async allTracks(req,res){
    let doc;
      try{
 
 doc = await TRACK.find({});
console.log(doc)
 res.status(200).json(doc);

      }
      catch(err){
          return res.status(500).json({message: err.message})
      }
},
// SE
async seTracks(req,res){
  let doc;
    try{

doc = await TRACK.find({type: "SE"});
console.log(doc)
res.status(200).json(doc);

    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
},
async seTags(req,res){
  let thistype;
  let arrayOnTags=[];
//find only tag 
thistype = await TRACK.find({type: "SE"},{tag:1, _id:0});

for(let i=0; i<=thistype.length-1; i++){
  arrayOnTags.push(...thistype[i].tag)
}
// unique array
let uniqueArray=new Set(arrayOnTags);
res.status(200).json([...uniqueArray]);
},
// AMB
async ambTracks(req,res){
  let doc;
    try{

doc = await TRACK.find({type: "AMB"});
console.log(doc)
res.status(200).json(doc);

    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
},
async ambTags(req,res){
  let thistype;
  let arrayOnTags=[];
//find only tag 
thistype = await TRACK.find({type: "AMB"},{tag:1, _id:0});

for(let i=0; i<=thistype.length-1; i++){
  arrayOnTags.push(...thistype[i].tag)
}
// unique array
let uniqueArray=new Set(arrayOnTags);
res.status(200).json([...uniqueArray]);
}
}

