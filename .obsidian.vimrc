" Navigate back
exmap back obcommand app:go-back
nmap H :back<CR>

" Navigate forward
exmap forward obcommand app:go-forward
nmap L :forward<CR>

" Jump to link
exmap jumptolink obcommand mrj-jump-to-link:activate-jump-to-link
nmap f :jumptolink<CR>

" Go to previous tab
exmap prevtab obcommand workspace:previous-tab
nmap J :prevtab<CR>

" Go to next tab
exmap nexttab obcommand workspace:next-tab
nmap K :nexttab<CR>

" Create new note
exmap newnote obcommand file-explorer:new-file
nmap n :newnote<CR>

" Jump to next cursor location
exmap nextcursor obcommand templater-obsidian:jump-to-next-cursor-location
nmap gi :nextcursor<CR>

" Omnisearch
exmap omnisearch obcommand omnisearch:show-modal
nmap o :omnisearch<CR>

