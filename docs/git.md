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

## Configuration

File .gitconfig:

Sur Linux: ~/.gitconfig
Sur Windows: C:\Users\YourName

::: details Configuration simple
```shell
[user]
  name = fabcre
  email = mail@mail.fr
[push]
  default = simple
[pull]
  rebase = true
[color]
  ui = true
[alias]
  lo = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
  st = status
  df = diff
  co = checkout
  ci = commit
  br = branch
  sw = switch
  stashpull = !git stash && git pull && git stash pop
  amend = commit --amend --no-edit
  undo = git reset --mixed HEAD^
  addu = add -u # stages modified & deleted ("git add ." stages new & modified)
  adda = add -A # stages ALL
```
:::

::: details Configuration @porteneuve
```shell
[user]
  name = Your Full Name
  email = your@email.tld
[color]
  # Enable colors in color-supporting terminals
  ui = auto
[alias]
  st = status
  ci = commit
  lg = log --graph --date=relative --pretty=tformat:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%an %ad)%Creset'
  oops = commit --amend --no-edit
  review-local = "!git lg @{push}.."
  # Or pre 2.5, as we didn't differential push and upstream in shorthands:
  # review-local = lg @{upstream}..
[core]
  # Don't paginate output by default
  pager = cat
  #
  # Out of luck: on Windows w/o msysGit? You may have Notepad++…
  # editor = 'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin
  #
  # If you want to use Sublime Text 2's subl wrapper:
  # editor = subl -w
  #
  # Or Atom, perhaps:
  # editor = atom --wait
  #
  # Sublime Text 2 on Windows:
  # editor = 'c:/Program Files (x86)/Sublime Text 2/sublime_text.exe' -w
  #
  # Sublime Text 3 on Windows:
  # editor = 'c:/Program Files/Sublime Text 3/subl.exe' -w
  #
  # Don't consider trailing space change as a cause for merge conflicts
  whitespace = -trailing-space
[diff]
  # Use better, descriptive initials (c, i, w) instead of a/b.
  mnemonicPrefix = true
  # Show renames/moves as such
  renames = true
  # When using --word-diff, assume --word-diff-regex=.
  wordRegex = .
  # Display submodule-related information (commit listings)
  submodule = log
[fetch]
  # Auto-fetch submodule changes (sadly, won't auto-update)
  recurseSubmodules = on-demand
[grep]
  # Consider most regexes to be ERE
  extendedRegexp = true
[log]
  # Use abbrev SHAs whenever possible/relevant instead of full 40 chars
  abbrevCommit = true
  # Automatically --follow when given a single path
  follow = true
[merge]
  # Display common-ancestor blocks in conflict hunks
  conflictStyle = diff3
[mergetool]
  # Clean up backup files created by merge tools on tool exit
  keepBackup = false
  # Clean up temp files created by merge tools on tool exit
  keepTemporaries = false
  # Put the temp files in a dedicated dir anyway
  writeToTemp = true
  # Auto-accept file prompts when launching merge tools
  prompt = false
[pull]
  # This is GREAT… when you know what you're doing and are careful
  # not to pull --no-rebase over a local line containing a true merge.
  # rebase = true
[push]
  # Default push should only push the current branch to its push target, regardless of its remote name
  default = upstream
  # When pushing, also push tags whose commit-ishs are now reachable upstream
  followTags = true
[rerere]
  # If, like me, you like rerere, uncomment these
  # autoupdate = true
  # enabled = true
[status]
  # Display submodule rev change summaries in status
  submoduleSummary = true
  # Recursively traverse untracked directories to display all contents
  showUntrackedFiles = all
[color "branch"]
  # Blue on black is hard to read in git branch -vv: use cyan instead
  upstream = cyan
[tag]
  # Sort tags as version numbers whenever applicable, so 1.10.2 is AFTER 1.2.0.
  sort = version:refname
[versionsort]
  prereleaseSuffix = -pre
  prereleaseSuffix = .pre
  prereleaseSuffix = -beta
  prereleaseSuffix = .beta
  prereleaseSuffix = -rc
  prereleaseSuffix = .rc
```
:::

## Rebase process

git checkout -b newbranch
Depuis master afin de créer une nouvelle branche pour travailler.

git commit
Effectuer ses commits sur cette branche.

git checkout master
Se rendre sur la branche master.

git reset --hard origin/master
Attention, cette commande est à effectuer seulement si du travail a été commencé sur master.

git merge --ff-only [nomdela/branch]
Effectuer un merge en fast forward only.

git rebase --interactive [les 4 premiers caractères du hash]
Effectuer un rebase interactive depuis le commit, dans le rebase "pick" le premier commit dans l'ordre chronologique et "fixup" les autres commits (idem que squash mais sans la modification du message) puis sauvegarder les changements.

git log
Effectuer un log afin de vérifier le bon déroulement avant de push.

git push
Effectuer un push.

git branch -D [nomdela/branch]
Supprimer la branche avec force.

git branch
Vérifier la suppression de la branche.

git push --delete [nomdela/branch]
Supprimer la branche distante.

git pull
Vérifier la situation en effectuant un pull.

git branch -vv
Permet de comparer les branches distantes et locales.

## Merge process

## Command

Command	Description	Example
git init [nom du projet]	Initialise un nouveau dépot sur la machine dans le dossier où la command est lancée.	Nouveau projet Git local à partir d'un dossier local. Si on veut ensuite le partager sur GitHub, il faudra alors paramétrer le remote
git clone [dépot a cloner]	Clone un dépot sur la machine dans le dossier où la command est lancée.	Attention à la configuration de git: clé ssh et droit sur le dépot distant.
git status	Récapitule l'état local (workspace et index) des fichiers (par rapport au repo récupéré).	En rouge : modifié mais non pris en compte (= en workspace), en vert : modifié et pris en compte (= ajouté à l'index).
git --help [command]	Renvoi au manuel de la commande.	On peut préciser une commande particulière "git --help branch"
git [command] -help	Renvoi la liste des commandes disponibles.	On peut préciser une commande particulière "git branch -help"
git remote add origin [adresse du remote]	Créé et ajoute une nouvelle remote "origin" à l'adresse indiqué.	git remote add origin git@github.com:FabCre/test.github
git push -u origin master	Le flag -u permet de sauvegarder les paramêtres dans le .git pour les prochains push.
git remote -v	Affiche les remotes.
git log	Voir l'historique des commits.	git log -7 permet de voir les 7 dernier commits
git show	Voir l'intégralité du commit dans le terminal.	git show + 7 premiers caractères du hash du commit
git diff	Affiche les modifications depuis le dernier commit dans le local.	On peut ajouter le flag -w pour faire le diff sans les whitespace, indentations...
git commit --amend	Permet de modifier le dernier commit en local, seuls les éléments staged sont ajoutés au commit amendé.	En ajoutant le --no-edit en flag, cela permet de conserver le message du commit amendé.
git branch [nom de la branche]	Crée une nouvelle branche à partir de la branche et commit courant.
git checkout [nom de la branche]	Permet de se rendre sur la branche nommée.
git merge [nom de la branche]	Effectue un merge sur la branche principale, nécessite de résoudre les conflits.
git branch -d [nom de la branche]	Supprime la branch sur le local.	On peut ajouter le flag -f pour supprimer la branche avec des changements non mergés.
git push origin --delete [nom de la branche]	Supprime la branch distante.
git stash	Met en brouillon les dernières modifications depuis le dernier commit dans le local.
git stash pop	Reprend ce qui à été ajouté en brouillon et le supprime du brouillon.
git stash apply	Applique ce qui à été ajouté en brouillon sans le supprimer du brouillon.
git stash list	Affiche la liste des brouillons présent sur le local.
git stash drop stash@{[identifiant du stash]}	Supprime le stash identifier	git stash drop stash@{0}
git push	Envoi les commits vers le repo distant, on peut identifier explicitement l'adresse de l'envoi.	git push origin/master
git pull	Recupère les derniers commits, le git pull effectue par défaut un fetch puis un merge, il est préférable d'utiliser le flag --rebase afin de placer son travail en tête de branche	git pull adresse.git
git add [fichier a ajouter dans le commit]	Ajoute le fichier nommée, mettre un espace entre chaque fichier à ajouter au comit. En utilisant le git add . tout est ajouté dans le commit.
git add -p	Permet d'effectuer une review des dernières modifications et n'ajouter que ce qui est nécessaire au présent commit. Attention, les fichiers "untracked" ne seront pas reviewés.
git reset HEAD .	Permet de supprimer les fichiers et/ou dossiers ajouter par erreur.
git reset [hash du commit]	Annule tous les commits après le commit ciblé, en conservant les modifications localement.
git reset [nom de fichier]	Enlève le fichier de l'index, mais conserve son contenu.
git commit	Ouvre l'éditeur de texte et permet de taper un titre de commit suivi d'un message. Attention, le titre et le message doivent être séparé par une ligne vide.
git commit -m [titre du commit]	Commande de raccourci pour effectuer un commit mais ne permet pas de laisser de message de commit.
git rebase [nom de la branche]	Applique les commits au dessus des autres commits.	Se référer au rebase process.
git rebase --interactive	Permet de reword, fixup, saquash ou autre sur les commits qui ne sont pas encore push sur le remote.
git fetch --prune	Permet de synchroniser la branche et les commits entre le local et le remote.
git fetch --all	Permet de synchroniser toutes les branches et les commits entre le local et le remote.
git fetch	Permet de récupérer tout l'historique et les modifications du repo.
git cherry-pick [hash du commit]	Permet d'effectuer un rebase interactive avec un seul commit d'une autre branche.
git revert [hash du commit]	Permet de créer un commit de revert afin d'annuler son contenu.
git tag [nom du tag] [hash du commit]	Permet de créer un tag sur un commit pour indiquer clairement une version.	git tag RC1.0 c81c9ab puis un "git push --tags" pour envoyer le tag.