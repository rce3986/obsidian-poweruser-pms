tags #moc
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" ")`
weblinks 
___
Notes in the inbox are fleeting notes that haven't been backlinked to the web of permanent notes. It is important to periodically organize the inbox so that knowledge isn't lost in the chaos.

Do one of the following for each inbox note:
- link to a permanent note
- tag appropriately
- delete

Below are all inbox notes included in this vault: 
```dataview
LIST
WHERE !containsword(file.name, "template")
AND !file.inlinks 
AND !file.outlinks
AND !file.tags
```