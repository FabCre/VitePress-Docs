## Install fonts

- Victor Mono
- Télécharger les patched fonts sur [NerdFonts](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts)
- Installer ces fonts pour tous les utilisateurs afin qu'elles soient disponible partout

## Starship theme

- Installer [Starship repo](https://starship.rs/).

## Install mandatory tools

- Node JS
- Git

## Neo Vim

::: tip Windows

- Installer NeoVim en suivant les instructions du repo [NeoVim](https://github.com/neovim/neovim/wiki/Installing-Neovim#windows) 

- La configuration doit être dans "AppData", il faut créer le fichier pour ensuite y mettre la config. La command suivante permet de créer le fichier et le "init.vim" pour une configuration standard.

``` Powershell
mkdir ~\AppData\Local\nvim New-Item -Path ~\AppData\Local\nvim\init.vim -Type File
```

- Pour éditer le fichier de configuration standard, taper ":edit $MYVIMRC".
:::

::: info WSL 2

- Supprimer neovim s'il est déjà existant sur le sub system

``` shell
sudo apt remove --purge neovim
sudo apt autoremove
```

- Télécharger nvim.appimage (voir le numéro de version sur le repo gitHub releases)

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

Application React avec vite sur [gitHub page](https://fabcre.github.io/React-Git-Help/).

## Powershell & profile

- Installer Starship

- Emplacement du fichier profile "C:\Users\USERNAME\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1"

- Pour connaitre l'emplacement du fichier : "$PROFILE", pour le lire "cat $PROFILE".

::: details PowerShell profile contenu du fichier
function Go-To-Docs {
    Set-Location -Path "~\Documents\Ressources-Techniques\VitePress-Docs"
}

function Go-Ressources {
    Set-Location -Path "~\Documents\Ressources-Techniques\"
}

function Nvim-Here {
    nvim .
}

Invoke-Expression (&starship init powershell)
:::

## Zsh & .zshrc

- Emplacement des fichiers "/home/user/".

- Installer Zsh 

``` shell
# Debian
sudo apt install zsh
# Arch
sudo pacman -S zsh
```

- Change le shell par défaut

``` shell
chsh -s $(which zsh)
``` 

- Vérifier le shell par défaut

``` shell
which $SHELL
dois être => /usr/bin/zsh
```

- Ajouter les plugins, cloner les plugins depuis les repo git puis les déplcer dans le répertoire "/usr/share/zsh/plugins/PLUGINS_NAME/"
    - [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
    - [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

- Ajouter dans le .zshrc les plugins comme dans la configuration ci dessous.

::: details zshrc contenu du fichier
autoload -U promptinit; promptinit

eval "$(starship init zsh)"

function example () {
    cd "/home/user/"
}

function example2 () {
    cd "/home/user/ && ls -a
}

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory

source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
:::
