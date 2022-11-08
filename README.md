# Simple CORS proxy

Ce petit serveur à été mis en place dans le cadre du cours de "Web Dynamique 1" en MM3B de l'Institut des Arts de Diffusion.

## Comment installer ?

* Telecharger le projet via GIT ou en téléchargeant le dossier en .zip
* A l'aide de la ligne de commande, se rendre dans le dossier
* Toujours dans le terminal, lancer la commande `npm install`
* Une fois l'installation des dépendances du projet terminée, lancer le serveur à l'aide de la commande `npm run dev`
* A partir de maintenant toutes les requetes GET effectuées vers `http://localhost:3000/UNE_URL` seront transferées vers le serveur en question.

## Exemple :

Soi l'on souhaite faire une requete vers : ``http://api.open-notify.org/astros.json``, il faut faire une requete vers :
``http://localhost:3000/http://api.open-notify.org/astros.json``

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.