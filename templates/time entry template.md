<%* 
// Set title to current date and time.
let displayDate = tp.date.now("YYYY-MM-DD ddd HH\\h mm\\m ss\\s");
await tp.file.rename(displayDate); 
_%>

tags #time-entry - #<% tp.file.cursor() %>

<%_*
// Hack to get tp.file.cursor to work properly: https://forum.obsidian.md/t/how-to-move-cursor-to-body-on-file-creation/83416/2
tp.hooks.on_all_templates_executed(async () => {
  app.workspace.activeLeaf.view.editor.focus();
});
-%>

backlinks [[timesheet]] - `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" - ")`
weblinks 
___
