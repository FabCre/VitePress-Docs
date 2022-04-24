## Git help reminder

Application React avec vite sur [gitHub page](https://fabcre.github.io/React-Git-Help/).

## Merge versus Rebase

**MERGE**

Bon choix lorsque l'on souhaite ajouter notre travail à un travail collectif.

Cela va créer un commit de merge regroupant les commits et modifier la branche master.

Dans le cas où, il n'y a pas de commit en "retard" sur la branche feature, aucun commit de merge n'est créé, cela se
nomme le "Fast Forward".

**REBASE**

Bon choix lorsque l'on souhaite récupérer le travail de collègues pour mettre à jour sa version de la branche
partagé. Ou se mettre à jour par rapport à une branche d'origine.

Cela va rejouer l'historique de la branche local au top de la branche que l'on rebase sans créer de commit. Si lors du "
rolling", il y a un conflit sur un commit, git va demander à résoudre ce conflit avant de poursuivre au commit suivant.

Le rebase permet de conserver un historique linéaire très lisible.
