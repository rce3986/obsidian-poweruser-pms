tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/
___
