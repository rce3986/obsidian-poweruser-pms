tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" ")`
weblinks 
___
Do one of the following for each orphan note:
- link to a permanent note
- tag appropriately
- delete

Below are all of the orphan notes included in this vault: 
```dataview
LIST
WHERE !containsword(file.name, "template")
AND !file.inlinks 
AND !file.outlinks
AND !file.tags
```