backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-tasks/#implicit-fields
___
Available task and list metadata (e.g., completed, outlinks, etc.).
