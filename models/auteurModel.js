// model Auteur

const authorSchema= new mongoose.Schema({
  nom:{String, required:true},
  biographie:{String},
  bibliographie:{ URL}
});
  export const Auteur= mongoose.model('Auteur',authorSchema)