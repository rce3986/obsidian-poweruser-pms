tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" ")`
weblinks 
___
# obsidian-poweruser-pms
This repo is a Personal Management System (PMS) for power users using the Zettelkasten method in the Obsidian notes app.
## setup PMS repo
You must have an Obsidian vault before setting up this PMS.

1. Open up a command-line shell.
2. Navigate to your vault directory.  
3. Clone this repo. A directory with the repo name should appear in the vault.
4. Navigate into the cloned repo.
5. Run `export_config.sh` to copy the `.obsidian` configuration into the vault root directory.
## explore
Open your obsidian vault and explore the notes linked below. You can always navigate back using the inlinks at the top of the note.
### [[PMS MOC]]

