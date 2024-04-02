# Divers utils

## git ajout d'un fichier pour ne pas le suivre

git update-index --assume-unchanged src/public/index.html

## Typescript

```ts
type Primitive = number | string | boolean | symbol | Date;
type DeepPartial<T> = { [K in keyof T]?: T[K] extends Primitive ? T[K] : DeepPartial<T[K]> };

export function p<T>(x: DeepPartial<T>): T {
return x as unknown as T;
}
```

## ObjectId aleatoire

```js
const mongoObjectId = function () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};
```

# zsh

autoload -U promptinit; promptinit

# Init with spaceship theme
eval "$(starship init zsh)"

# Alias
alias prename='/usr/bin/vendor_perl/rename' # sudo pacman -Syu perl-rename => use it instead of rename built-in
alias lsa='ls -ltra'
alias hg='history | grep'

# Utils function custom
function gotoVitePressDocs () {
cd "/home/panda/Documents/Developpement/VitePress-Docs/"
}

function gotoDevelopment () {
cd "/home/panda/Documents/Developpement/"
}

function gotoZshConfiguration () {
cd "/home/panda/" && nvim ./.zshrc
}

function gotoNvimConfiguration () {
cd "/home/panda/.config/nvim/" && ls -la
}

function gotoUpdateNvimConfigurationFrom-Repo () {
cp -R /home/panda/Documents/Developpement/Configuration-Dot-Files/Neovim/lua /home/panda/Documents/Developpement/Configuration-Dot-Files/Neovim/init.lua /home/panda/.config/nvim
}

function renameReplaceSpaceByDash () {
prename -v 'y/ /\-/' *
}

# History for Zsh
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory

# Plugin sources
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Env variables
export PNPM_HOME="/home/panda/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

# Key binding
bindkey "^@" set-mark-command
bindkey "^A" beginning-of-line
bindkey "^B" backward-char
bindkey "^D" delete-char-or-list
bindkey "^E" end-of-line
bindkey "^F" forward-char
bindkey "^G" send-break
bindkey "\E[3~" backward-delete-char
bindkey "^I" expand-or-complete
bindkey "^J" accept-line
bindkey "^K" kill-line
bindkey "^L" clear-screen
bindkey "^M" accept-line
bindkey "^N" down-line-or-history
bindkey "^O" accept-line-and-down-history
bindkey "^P" up-line-or-history
bindkey "^Q" push-line
bindkey "^R" history-incremental-search-backward
bindkey "^S" history-incremental-search-forward
bindkey "^T" transpose-chars
bindkey "^U" kill-whole-line
bindkey "^V" quoted-insert
bindkey "^W" backward-kill-word
bindkey "^X^B" vi-match-bracket
bindkey "^X^F" vi-find-next-char
bindkey "^X^J" vi-join
bindkey "^X^K" kill-buffer
bindkey "^X^N" infer-next-history
bindkey "^X^O" overwrite-mode
bindkey "^X^U" undo
bindkey "^X^V" vi-cmd-mode
bindkey "^X^X" exchange-point-and-mark
bindkey "^X*" expand-word
bindkey "^X=" what-cursor-position
bindkey "^XG" list-expand
bindkey "^Xg" list-expand
bindkey "^Xr" history-incremental-search-backward
bindkey "^Xs" history-incremental-search-forward
bindkey "^Xu" undo
bindkey "^Y" yank
bindkey "^[^D" list-choices
bindkey "^[^G" send-break
bindkey "^[^H" backward-kill-word
bindkey "^[^I" self-insert-unmeta
bindkey "^[^J" self-insert-unmeta
bindkey "^[^L" clear-screen
bindkey "^[^M" self-insert-unmeta
bindkey "^[^_" copy-prev-word
bindkey "^[ " expand-history
bindkey "^[!" expand-history
bindkey "^[\"" quote-region
bindkey "^[\$" spell-word
bindkey "^['" quote-line
bindkey "^[-" neg-argument
bindkey "^[." insert-last-word
bindkey "^[0" digit-argument
bindkey "^[1" digit-argument
bindkey "^[2" digit-argument
bindkey "^[3" digit-argument
bindkey "^[4" digit-argument
bindkey "^[5" digit-argument
bindkey "^[6" digit-argument
bindkey "^[7" digit-argument
bindkey "^[8" digit-argument
bindkey "^[9" digit-argument
bindkey "^[<" beginning-of-buffer-or-history
bindkey "^[>" end-of-buffer-or-history
bindkey "^[?" which-command
bindkey "^[A" accept-and-hold
bindkey "^[[1;5D" backward-word
bindkey "^[C" capitalize-word
bindkey "^[D" kill-word
bindkey "^[[1;5C" forward-word
bindkey "^[G" get-line
bindkey "^[H" run-help
bindkey "^[L" down-case-word
bindkey "^[N" history-search-forward
bindkey "^[OA" up-line-or-history
bindkey "^[OB" down-line-or-history
bindkey "^[OC" forward-char
bindkey "^[OD" backward-char
bindkey "^[P" history-search-backward
bindkey "^[Q" push-line
bindkey "^[S" spell-word
bindkey "^[T" transpose-words
bindkey "^[U" up-case-word
bindkey "^[W" copy-region-as-kill
bindkey "^[[200~" bracketed-paste
bindkey "^[[A" up-line-or-history
bindkey "^[[B" down-line-or-history
bindkey "^[[C" forward-char
bindkey "^[[D" backward-char
bindkey "^[_" insert-last-word
bindkey "^[a" accept-and-hold
bindkey "^[b" backward-word
bindkey "^[c" capitalize-word
bindkey "^[d" kill-word
bindkey "^[f" forward-word
bindkey "^[g" get-line
bindkey "^[h" run-help
bindkey "^[l" down-case-word
bindkey "^[n" history-search-forward
bindkey "^[p" history-search-backward
bindkey "^[q" push-line
bindkey "^[s" spell-word
bindkey "^[t" transpose-words
bindkey "^[u" up-case-word
bindkey "^[w" copy-region-as-kill
bindkey "^[x" execute-named-cmd
bindkey "^[y" yank-pop
bindkey "^[z" execute-last-named-cmd
bindkey "^[|" vi-goto-column
bindkey "^[^?" backward-kill-word
bindkey "^_" undo
bindkey -R " "-"~" self-insert
bindkey "^?" backward-delete-char
bindkey -R "\M-^@"-"\M-^?" self-insert
