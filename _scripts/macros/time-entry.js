class TimeEntry {
    hoursChargedMsg(dv) {
        
        const TIME_ENTRY_TAG = "#time-entry";
        const NONE = "none";
        const TEMPLATES_FOLDER = "obsidian-power-user-pms/templates";
        const ZETTEL_DATE_FORMAT = "YYYY-MM-DD ddd HH\\h mm\\m ss\\s";

        const timeEntries = dv.pages(TIME_ENTRY_TAG)
            .filter(p => p.file.folder != TEMPLATES_FOLDER)
            .sort(p => p.file.name);

        const currTimeEntry = dv.current();
        const currPageIdx = timeEntries.indexOf(currTimeEntry);

        function zettelToDate(page) {
            return moment(page.file.name, ZETTEL_DATE_FORMAT).toDate();
        }

        let message;
        const programTagRegex = /#program\/(.*)/;
        const currProgramMatch = currTimeEntry.file.etags
            .join("")
            .match(programTagRegex);
        if (!currProgramMatch) {
            message = "Error: Enter the program in a valid format."
            dv.span(message);
            return;
        }
        const currProgram = currProgramMatch[1];
        if (currProgram === NONE) {
            message = "No program is being charged."

        } else if (currPageIdx === timeEntries.length - 1) {
            message = "Error: Missing end time.";

        } else {
            const nextTimeEntry = timeEntries[currPageIdx + 1];
            const currTime = zettelToDate(currTimeEntry);
            const nextTime = zettelToDate(nextTimeEntry);

            const milliseconds = nextTime - currTime;
            const hours = milliseconds / 1000 / 60 / 60;

            message = "Charging " + hours.toFixed(1) + " hours to " + currProgram + ".";
        }

        dv.span(message);
    }
}