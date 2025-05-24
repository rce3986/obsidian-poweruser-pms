tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
Below are the community plugins currently used in the OPUP workflow:

- [[Dataview plugin]]
- [[Templater plugin]]