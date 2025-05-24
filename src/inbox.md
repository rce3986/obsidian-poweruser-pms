tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
Notes in the inbox are fleeting notes that haven't been backlinked to the web of permanent notes. It is important to periodically organize the inbox so that knowledge isn't lost in the chaos.

Do one of the following for each inbox note:
- link to a permanent note
- tag appropriately
- delete

Below are all inbox notes included in this vault: 
```dataviewjs
// TODO add description

let page = dv.page("main").file.path;

// CODE COPIED FROM HERE: https://blacksmithgu.github.io/obsidian-dataview/api/code-examples/#find-all-direct-and-indirectly-linked-pages

let pages = new Set();

let stack = [page];
while (stack.length > 0)
{
    let elem = stack.pop();
    let meta = dv.page(elem);
    if (!meta) continue;

    for (let inlink of meta.file.inlinks.concat(meta.file.outlinks).array())
    {
        if (pages.has(inlink.path)) continue;
        pages.add(inlink.path);
        stack.push(inlink.path);
    }
}

// Data is now the file metadata for every page that directly OR indirectly links to the main page.
let linkedPages = 
	dv.array(Array.from(pages))
		.map(p => dv.page(p))
		.filter(p => p) // ignore unresolved links
;

// All pages that can't be linked to main.
let unlinkedPageLinks =
	dv.pages()
		.filter(p1 => !linkedPages.some(p2 => p1.file.path === p2.file.path))
		.map(p => p.file.link)
;

if (unlinkedPageLinks.length > 0)
{
	dv.list(unlinkedPageLinks);
}
else
{
	dv.paragraph("\t\tDataview: No results to show for list query.");
}
```
