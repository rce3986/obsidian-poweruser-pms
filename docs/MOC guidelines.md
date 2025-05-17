tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
MOCs are important for linking permanent notes. Below are some guidelines to follow when creating or updating MOCs:

1. Follow the same general structure for each MOC:
	- summary
	- bulleted links

2. Try to have some sort of meaningful ordering links in the MOC if possible.

3. Generate bulleted links using [[Dataview plugin|Dataview]] where applicable. Just remember that backlinks to the MOC won't appear in the linked sources. 

4. Getting relevant sources to appear in the backlinks is important, since that is where you would typically go to navigate "up" the hierarchy (even though there isn't always an "up"). 
	- If a link appears many times in a note, it is better to just backlink it through a relevant MOC.
	- If you are adding identifiers of an "upwards" note to a page and the page is already backlinked, don't bother linking the identifiers.
	- If a link to a certain note absolutely must appear in the backlinks of another, go to the "upwards" note and add the link in the body (with appropriate context).
	- If a note is more of a "leaf," don't worry too much about managing the backlinks. You can likely just navigate backwards with your navigation history since there aren't many ways to access that note (e.g., any template note).

5. Split up a MOC if it accumulates too many links. There is no set amount of links to reach before splitting: just split whenever you feel it becomes difficult to navigate.