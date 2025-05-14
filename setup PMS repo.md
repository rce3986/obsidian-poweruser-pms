tags 
inlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" ")`
weblinks 
___
1. Open up a command-line shell.
2. Navigate to your vault directory.  
3. Clone this repo. A directory with the repo name should appear in the vault.
4. Navigate into the cloned repo.
5. Run `export_config.sh` to copy the `.obsidian` configuration into the vault root directory.
