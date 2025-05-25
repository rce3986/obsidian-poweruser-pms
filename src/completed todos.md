backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
Below is a history of all completed todos:
```dataview
TASK
WHERE contains(text, "[[todo]]")
AND completed
AND file.folder != "obsidian-power-user-pms/templates"
```