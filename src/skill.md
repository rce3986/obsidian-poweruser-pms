tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
To appear below, skills must follow the [[skill template]]. 
```dataview
TASK
WHERE contains(text, "[[skill]]")
AND file.folder != "obsidian-power-user-pms/templates"
SORT text ASC
```