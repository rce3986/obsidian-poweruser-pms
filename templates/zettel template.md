<%_ 
// This template is used for every new note. No other templates should be creating notes other than this one. Instead, create a new note using this template and then insert whatever template you need.

await customJS.Zettel.initZettelTitle(tp)

// Leave a space below so that backlinks will still be visible when opening a note in Live Preview.
-%>

```dataviewjs
await customJS.Zettel.backlinks(dv);
```
weblinks 
___
<% tp.file.cursor() %>
