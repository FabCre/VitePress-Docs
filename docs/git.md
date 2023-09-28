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

