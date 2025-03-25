import { livre } from "../models/bookModel";
import { Auteur } from "../models/auteurModel";

// ajouter un livre 

export const ajouterLivre= async (req,res)=>{
  try {
   const nouveauLivre =new livre({
      titre:req.body.titre,
      auteur: req.body.auteur,
      edition: req.body.edition,
      genre: req.body.genre
    });
    await nouveauLivre.save()
    res.statut(201).json('livre ajouté')
  } catch (error) {
    res.json({error:'livre non ajouté'})
  }};

  // recuperer tous les livres
  export const voirLivres= async (req, res)=>{
    try {
      const lesLivres= await livre.find();
      res.json(lesLivres)
    } catch  {
      res.json('Aucun livre')
    }};

// recuper un livre par son id 
    export const lireLivre= async (req, res)=>{
      try {
        const leLivre= await livre.findById(req.params.id);
        res.json(leLivre)
      } catch  {
        res.json('Aucun livre')
      }};

      // modifier les informations d'un livre 

      export const modifierInfos= async (req, res)=>{
        try {
          const modification= await livre.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidate:true});
          res.status(201).json('les informations du livre sont modifiés', modification)
        } catch (error) {
          res.json('erreur')
        }};

        // Supprimer un livre
        export const supprimerLivre= async(req,res)=>{
          try {
            const livreDelete= await livre.findByIdAndDelete(req.params.id);
            res.status(201).json('livre supprimé')
          } catch (error) {
            res.status(404).json({erreur:'livre non supprimé'})
          }};

          // recuperer un livre avec son auteur 
          export const livreAuteur= async (req , res)=>{
            try {
              const lecture = await livre.find().populate('Auteur');
              res.json(lecture)
            } catch (error) {
              res.status(404).json({erreur:'erreur'})
            }}