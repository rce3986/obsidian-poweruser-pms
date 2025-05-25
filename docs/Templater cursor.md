tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilecursororder-number
___
Using `tp.file.cursor` to setup cursor positions to jump to after creating a note from a template.