tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" ")`
weblinks 
___
MOCs are important for linking permanent notes. Below are some guidelines to follow when creating or updating MOCs

1. Follow the same general structure for each MOC:
	- summary
	- bulleted links

2. Try to have some sort of meaningful ordering links in the MOC if possible.

3. Generate bulleted links using [[Dataview plugin|Dataview]] where applicable. Just remember that backlinks to the MOC won't appear in the linked sources. 

4. Getting relevant sources to appear in the backlinks is important, since that is where you would typically go to navigate "up" the hierarchy (even though there isn't always an "up"). 
	- If a link appears many times in a note, it is likely better to just backlink it through a relevant MOC.
	- If adding a link to a page means it will disappear from the backlinks, then don't add it.

5. Split up a MOC if it accumulates too many links. There is no set amount of links to reach before splitting: just split whenever you feel it becomes difficult to navigate.