/**
 * @description Module for all dataview methods.
 * @module Utils
 */

class Utils {

    async tpFileCursorFix(tp) {

        // Hack to get tp.file.cursor to work properly: https://forum.obsidian.md/t/how-to-move-cursor-to-body-on-file-creation/83416/2
        tp.hooks.on_all_templates_executed(async () => {
            tp.app.workspace.activeLeaf.view.editor.focus();
        });

        return ""; // nothing needs to be inserted
    }
}

module.exports = Utils;
