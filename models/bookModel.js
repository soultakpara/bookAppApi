const { default: mongoose } = require("mongoose");




// model du book
const bookSchema= new mongoose.Schema(
  {
  titre:{String ,required:true},
  auteur:{ type:mongoose.schema.type.ObjectId,ref:('Auteur')},
  edition:{Number},
  genre:{String}
  });
  export const livre= mongoose.model('livre', bookSchema);

  