import { app } from "../server";
import { ajouterLivre } from "../contollers/bookController";
import { voirLivres } from "../contollers/bookController";
import { lireLivre } from "../contollers/bookController";
import { modifierInfos } from "../contollers/bookController";
import { supprimerLivre } from "../contollers/bookController";
import { livreAuteur } from "../contollers/bookController";

// ROUTES 
// recuperer tous les livres 
 app.get('/livres',voirLivres);

//  Recuperer un livre
app.get('/livre/:id', lireLivre);

// Ajouter un livre 
app.post('/livres' , ajouterLivre);

// Modifier les informations d'un livre 
app.put('/livre/:id', modifierInfos);

// supprimer un livre 
app.delete('/livre/:id' , supprimerLivre);

// recuperer un livre avec son auteur

app.get('/livre/:id',livreAuteur)




