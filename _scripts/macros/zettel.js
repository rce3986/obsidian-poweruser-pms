/**
 * @description Module for all dataview methods.
 * @module Zettel
 */

class Zettel {

    /**
     * @param {string} moduleFile Name of the file module in the `/03-Files/scripts_module_<suffixe>/` folder.
     * @returns {any} Exported module.
     */
    static importModule(moduleFile) {

        const { obsidian, app } = self.customJS || {};
        if (obsidian == null || app == null) throw new Error("customJS is null.");
        
        let adapter = app.vault.adapter;
        if (adapter instanceof obsidian.FileSystemAdapter === false) {
            throw new Error("Obsidian adapter is not a FileSystemAdapter.");
        }

        const modulePath =
            adapter.getBasePath() +
            "/obsidian-power-user-pms/_scripts/modules/" +
            moduleFile;
        delete global.require.cache[global.require.resolve(modulePath)];
        const module = require(modulePath);
        return new module();
    }

    // Import modules.
    Utils = Zettel.importModule('utils.js');
    
    async initZettelTitle(tp) {

        // Set title to current date and time.
        let displayDate = tp.date.now("YYYY-MM-DD ddd HH;mm;ss");
        await tp.file.rename(displayDate);
       
        // Run cursor fix.
        await this.Utils.tpFileCursorFix(tp);

        // Nothing needs to be inserted.
        return ""; 
    }
    
    backlinks(dv) {

        // Grab all backlinks that aren't already included in the body.
        let backlinks = dv.array(dv.current().file.inlinks)
            .filter(inlink => !dv.current().file.outlinks
                .some(outlink => outlink.path === inlink.path)
            );

        // Output in a single line separated by a dash.
        dv.span("backlinks " + backlinks.join(" - "));
    }
}
