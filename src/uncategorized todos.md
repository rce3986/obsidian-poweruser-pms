backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
Assign a tag for each todo:
```dataview
TASK
WHERE contains(text, "[[todo]]")
AND !tags
AND file.folder != "obsidian-power-user-pms/templates"
```
