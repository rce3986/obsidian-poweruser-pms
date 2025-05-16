tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" ")`
weblinks 
___
[[map of content (MOC)|MOCs]] are important for linking permanent notes. Below are some guidelines to follow when creating or updating [[map of content (MOC)|MOCs]]:

1. Follow the same general structure for each [[map of content (MOC)|MOC]]:
	- summary
	- bulleted links

2. Try to have some sort of meaningful ordering to the links if possible.

3. Generate bulleted links using [[Dataview plugin MOC|Dataview]] where applicable. Just remember that backlinks to the [[map of content (MOC)|MOC]] won't appear in the linked sources. 

4. Split up a [[map of content (MOC)|MOC]] if it accumulates too many links. There is no set amount of links to reach before splitting: just split whenever you feel it becomes difficult to navigate.