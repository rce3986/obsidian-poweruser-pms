async function init_zettel_title(tp) {

    // Set title to current date and time.
    let displayDate = tp.date.now("YYYY-MM-DD ddd HH\\h mm\\m ss\\s");
    await tp.file.rename(displayDate); 

    // Hack to get tp.file.cursor to work properly after setting the title: https://forum.obsidian.md/t/how-to-move-cursor-to-body-on-file-creation/83416/2
    tp.hooks.on_all_templates_executed(async () => {
        app.workspace.activeLeaf.view.editor.focus();
    });

    // Nothing needs to be inserted.
    return "";
}

module.exports = init_zettel_title;
