## Install fonts

- Victor Mono
- Télécharger les patched fonts sur [NerdFonts](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts)
- Installer ces fonts pour tous les utilisateurs afin qu'elles soient disponible partout

## Starship theme

[Starship repo](https://starship.rs/)

## Install mandatory tools

- Node JS
- Git

## Neo Vim

::: tip Windows

- Installer NeoVim en suivant les instrutions du repo [NeoVim](https://github.com/neovim/neovim/wiki/Installing-Neovim#windows) 

- La configuration doit être dans "AppData", il faut créer le fichier pour ensuite y mettre la config. La command suivante permet de créer le fichier et le inti.vim pour une configuration standard.

``` Powershell
mkdir ~\AppData\Local\nvim New-Item -Path ~\AppData\Local\nvim\init.vim -Type File
```

- Pour éditer le fichier de configuration standard, taper ":edit $MYVIMRC".
:::

::: info WSL 2

- Supprimer neovim si il est déjà existant sur le sub system

``` shell
sudo apt remove --purge neovim
sudo apt autoremove
```

- Télécharger nvim.appimage (voir le numéro de version sur le repo github releases)

``` shell
cd ~
wget https://github.com/neovim/neovim/releases/download/v0.4.4/nvim.appimage
```

- Déplacer le fichier appimage et le rendre runnable

``` shell
sudo mv nvim.appimage /usr/local/bin
sudo chmod +x /usr/local/bin/nvim.appimage
```

- Rendre les commandes "vi", "vim" et "ex" pour éxecuter neovim
``` shell
CUSTOM_NVIM_PATH=/usr/local/bin/nvim.appimage
sudo update-alternatives --install /usr/bin/ex v "${CUSTOM_NVIM_PATH}" 110
sudo update-alternatives --install /usr/bin/vi vi "${CUSTOM_NVIM_PATH}" 110
sudo update-alternatives --install /usr/bin/vim vim "${CUSTOM_NVIM_PATH}" 110
```
:::

::: tip Linux 

Créer les fichiers dans .config (/home/"user"/.config/nvim/)

Lancer le :checkhealth

Installer ce qui manque dans le check (nodejs, ruby, python)

pacman -S ripgrep

pacman -S fd
:::

## Git config

Application React avec vite sur [github page](https://fabcre.github.io/React-Git-Help/).

## Powershell & profile

Emplacement du fichier profile  

## Zsh

Emplacement du fichier .zshrc / .zshenv / .zsh_history => /home/user/

Installer spaceship prompt

https://linuxhint.com/use-zsh-auto-suggestions/ <== pour installer proprement zsh

::: details zshrc contenu du fichier
autoload -U promptinit; promptinit

# Init with spaceship theme
eval "$(starship init zsh)"

# Utils function custom
function example () {
    cd "/home/user/"
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

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
:::
