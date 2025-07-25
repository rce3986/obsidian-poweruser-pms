
```dataviewjs
await customJS.Zettel.backlinks(dv);
```
weblinks https://github.com/blacksmithgu/obsidian-dataview/issues/1372
___
To avoid copy-pasting the inline query for backlinks for each zettel (using the [[Templater plugin]]), I wanted to store the backlink generation code in a separate `.js` file.

The problem with this is that inline Dataview JS doesn't work with asynchronous functions (functions called with `await`) that return a Promise; they need to return a single, renderable JS value.

The solution: DON'T USE INLINE DATAVIEW JS.

Anything large enough that it needs to be modularized should be handled regular dataview blocks, not inline.

This can be achieved by including the desired static contents of the line in the `.js` file and then displaying with a `dv.span` element.
