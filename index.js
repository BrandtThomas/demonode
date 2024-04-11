const express = require('express');
const app = express();

// Route pour récupérer le JSON généré
app.get('/api/json', (req, res) => {
    // Génération du JSON (pour cet exemple, un objet simple)
    
    
    // connexion à la bdd
    // requete sql
    // récupération des datas


    // push des data dans le json
    const jsonData = {
        message: "Voici le JSON généré par l'API",
        date: new Date()
    };

    // Envoi du JSON en réponse
    res.json(jsonData);
});

// Port d'écoute du serveur
const port = 3000;

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
