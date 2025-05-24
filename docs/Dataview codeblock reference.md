tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/
___
Functions provided through the dv (dataview) variable in `dataviewjs` blocks (e.g., dv.pages, dv.list, etc.).
