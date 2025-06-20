---
aliases: []
---

```dataviewjs
await customJS.Zettel.backlinks(dv);
```
weblinks https://github.com/ryan-c-elliott/obsidian-power-user-pms
___
# obsidian-power-user-pms
If viewing this on GitHub, don't be intimidated by the cryptic code at the top. It is a critical element of all notes in Obsidian power user PMS (OPUP).
	
OPUP is a personal management system (PMS) geared towards power users using the Zettelkasten note-taking method in the Obsidian notes app. OPUP seeks to be minimalistic and quick to use with the tradeoff of not being so user-friendly.

If you don't consider yourself to be a power user, don't worry! OPUP contains the documentation needed to understand how it works, the principles it follows, and how to continuously build off of it. If you take the time to explore OPUP, you will get productivity gains that pay dividends in the long run.
## features
OPUP can do the following:

- function as a personal knowledge management system (PKMS),
- track time spent on different projects using a timesheet,
- and more (coming soon).
## setup
To setup OPUP, you must do the following:

1. Install Obsidian (if not already installed).
2. Create a vault (if you don't already have one).
3. Open up a command-line shell.
4. Navigate to your vault directory.  
5. Clone this repo. A directory with the repo name should appear in the vault.
6. Navigate into the cloned repo.
7. Give execute permissions to `src/export_config.sh` and `src/import_config.sh`.
8. Run `./src/export_config.sh` to copy the `.obsidian` configuration into the vault root directory.
9. Close and reopen obsidian to reload the configuration.
## explore
Open your obsidian vault and explore the notes linked below. You can always navigate back using the backlinks at the top of the note.
### about OPUP
- [[personal management system (PMS)]]
- [[map of content (MOC)]]
- [[Zettelkasten]]
- [[OPUP principles]]
- [[OPUP features]]
- [[OPUP plugins]]
- [[OPUP development]]
- [[OPUP templates]]
### features
- [[timesheet]]
## contributing
There are a few additional setup steps if you are planning on customizing your OPUP configuration:

1. Before modifying `src/archive.md`, run the command `git update-index --assume-unchanged src/archive.md`. This ensures that any non-configuration changes made to the archive won't show up in source control.
