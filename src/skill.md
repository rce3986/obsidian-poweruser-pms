tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
To appear below, skills must follow the [[skill template]]. If you are documenting the classes/projects/positions in which you acquired the skill, also link them after the skill.

Example (can be deleted):
- [ ] [[skill]] data structures [[cmsc420]] [[bds]]

Skills you acquire throughout your career will be listed below:
```dataview
TASK
WHERE contains(text, "[[skill]]")
AND file.folder != "obsidian-power-user-pms/templates"
SORT text ASC
```