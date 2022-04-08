## Mode

- Normal : **Esc** (default mode)
- Insert : **i**
- Visual : **v**
- Visual Line : **V** (shift + v)
- Command : depuis le mode normal, **:**
- Replace : **R** (shift + r)

## Road to learn correctly Vim

### First shortcuts

| Shortcut      | Description              | Comment                                        |
|---------------|--------------------------|------------------------------------------------|
| **h**         | droite                   |                                                |
| **l**         | gauche                   |                                                |
| **k**         | haut                     |                                                |
| **j**         | bas                      |                                                |
| **w**         | mot à mot avant          |                                                |
| **b**         | mot à mot arrière        |                                                |
| **y**         | copie la selection       | Supprimer et copier vont dans le même registre |
| **yy**        | copie la ligne           | Supprimer et copier vont dans le même registre |
| **p**         | coller la ligne          |                                                |
| **x**         | supprime le caractère    | Supprimer et copier vont dans le même registre |
| **dd**        | supprime la ligne        | Supprimer et copier vont dans le même registre |
| **v**         | visual mode              |                                                |
| **shift + v** | visual line mode         |                                                |
| **u**         | annuler un changement    |                                                |
| **:w**        | Normal mode, enregistrer |                                                |

### Second shortcuts

| Shortcut      | Description                                                     | Comment |
|---------------|-----------------------------------------------------------------|---------|
| **o**         | ajoute une ligne en dessous et insert                           |         |
| **shift + o** | ajoute une ligne au dessus et insert                            |         |
| **shift + p** | colle au dessus                                                 |         |
| **a**         | insert après le caractère                                       |         |
| **shift + a** | insert à la fin de la ligne après le dernier caractère          |         |
| **shift + i** | insert au début de la ligne avant le premier caractère          |         |
| **/**         | entre en mode search                                            |         |
| **n**         | search le prochain match en sélectionnant le premier caractère  |         |
| **shift + n** | search le précédent match en sélectionnant le premier caractère |         |
| *             | search le prochain mot correspondant au cursor actuel           |         |
| **#**         | search le précédent mot correspondant au cursor actuel          |         |

### Motions

- **help motion.txt**

| Command  | Description                       | Comment |
|----------|-----------------------------------|---------|
| **:m N** | bouge la ligne courante vers la N |         |
| **:n N** | va à la ligne N                   |         |
