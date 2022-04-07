## Install fonts

- Victor Mono
- Télécharger les patched fonts sur le https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts
- Installer ces fonts pour tous les utilisateurs afin qu'elles soient disponible partout

## Install mandatory tools

- Node JS
- Git

## Neo Vim

### Pour Windows

Here is how you can do it in powershell:

mkdir ~\AppData\Local\nvim New-Item -Path ~\AppData\Local\nvim\init.vim -Type File

And then you can edit the file in nvim with <:edit $MYVIMRC>

Créer les fichiers dans .config
Lancer le :checkhealth
Installer ce qui manque dans le check (nodejs, ruby, python)
pacman -S ripgrep
pacman -S fd

## Git config

Application React avec vite sur [github page](https://fabcre.github.io/React-Git-Help/).

## Powershell & profile

## Bash/Zsh & bashrc & zshrc

Emplacement du fichier .zshrc / .zshenv / .zsh_history => /home/<user>/

Installer spaceship prompt

::: details zshrc
autoload -U promptinit; promptinit

# Init with spaceship theme
eval "$(starship init zsh)"

# Utils function custom
function example () {
    cd "/home/<user>/" 
}

function example2 () {
    cd "/home/user/ && ls -a
}

# History for Zsh
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory

# Plugin sources
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh/plugins/zsh-history-substring-search/zsh-history-substring-search.zsh
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
:::

## Starship theme

https://starship.rs/