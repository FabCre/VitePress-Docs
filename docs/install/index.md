## Install fonts

- Victor Mono
- Télécharger les patched fonts sur le https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts
- Installer ces fonts pour tous les utilisateurs afin qu'elles soient disponible partout

## Install mandatory tools

- Node JS
- Git

## Neo Vim

Windows file

Actually :help vimrc-intro is better.

But addressing your concern, the init.vim file needs to be created by you the user, why? Because it’s a user
configuration and unfortunately will have to be created by the user, so you just need to manually create the nvim folder
and the init.vim file.

Here is how you can do it in powershell:

mkdir ~\AppData\Local\nvim New-Item -Path ~\AppData\Local\nvim\init.vim -Type File

And then you can edit the file in nvim with :edit $MYVIMRC

install vim plug for plugin "vim plug"

iwr -useb https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim |`
ni "$(@($env:XDG_DATA_HOME, $env:LOCALAPPDATA)[$null -eq $env:XDG_DATA_HOME])/nvim-data/site/autoload/plug.vim" -Force

ADD plug and install : + PlugInstall
Pour les désinstall delete le plugin et taper : pluglcean

## Git config

Application React avec vite sur [github page](https://fabcre.github.io/React-Git-Help/).

## Powershell & profile

## Bash & bashrc

## Starship theme

https://starship.rs/