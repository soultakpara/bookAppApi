import { Auteur } from "../models/auteurModel";

// ajouter un Auteur

export const ajouterAuteur= async (req,res)=>{
  try {
   const nouveauAuteur =new Auteur({
      nom:req.body.nom,
      biographie: req.body.auteur,
      bibliographie: req.body.bibliographie
    });
    await nouveauAuteur.save()
    res.statut(201).json('Auteur ajouté')
  } catch (error) {
    res.json({error:'Auteur non ajouté'})
  }};

  // recuperer tous les Auteurs
  export const voirAuteurs= async (req, res)=>{
    try {
      const lesAuteurs= await Auteur.find();
      res.json(lesAuteurs)
    } catch  {
      res.json('Aucun Auteur')
    }};

// recuper un Auteur par son id 
    export const lireAuteur= async (req, res)=>{
      try {
        const leAuteur= await Auteur.findById(req.params.id);
        res.json(leAuteur)
      } catch  {
        res.json('Aucun Auteur')
      }};

      // modifier les informations d'un Auteur 

      export const modifierInfos= async (req, res)=>{
        try {
          const modification= await Auteur.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidate:true});
          res.status(201).json('les informations du Auteur sont modifiés', modification)
        } catch (error) {
          res.json('erreur')
        }};

        // Supprimer un Auteur
        export const supprimerAuteur= async(req,res)=>{
          try {
            const AuteurDelete= await Auteur.findByIdAndDelete(req.params.id);
            res.status(201).json('Auteur supprimé')
          } catch (error) {
            res.status(404).json({erreur:'Auteur non supprimé'})
          }};