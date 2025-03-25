import { app } from "../server";
import { ajouterAuteur } from "../contollers/auteursControllers";
import { voirAuteurs } from "../contollers/auteursControllers";
import { lireAuteur } from "../contollers/auteursControllers";
import { modifierInfos } from "../contollers/auteursControllers";
import { supprimerAuteur } from "../contollers/auteursControllers";

//  ROUTES 
// recuperer tous les Auteurs 
 app.get('/Auteurs',voirAuteurs);

//  Recuperer un Auteur
app.get('/Auteur/:id', lireAuteur);

// Ajouter un Auteur 
app.post('/Auteurs' , ajouterAuteur);

// Modifier les informations d'un Auteur 
app.put('/Auteur/:id', modifierInfos);

// supprimer un Auteur 
app.delete('/Auteur/:id' , supprimerAuteur);
