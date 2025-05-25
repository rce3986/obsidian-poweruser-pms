```dataviewjs
await dv.view("scripts/Dataview/backlinks");
```
weblinks 
___
To appear below, skills must follow the [[skill template]]. 
```dataview
TASK
WHERE contains(text, "[[skill]]")
AND file.folder != "obsidian-power-user-pms/templates"
SORT text ASC
```