```dataviewjs
await dv.view("scripts/Dataview/backlinks");
```
weblinks 
___
Assign a tag for each todo:
```dataview
TASK
WHERE contains(text, "[[todo]]")
AND !tags
AND file.folder != "obsidian-power-user-pms/templates"
```
