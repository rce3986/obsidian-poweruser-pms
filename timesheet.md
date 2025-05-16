tags 
backlinks `$= dv.array(dv.current().file.inlinks).filter(inlink => !dv.current().file.outlinks.some(outlink => outlink.path === inlink.path)).join(" ")`
weblinks 
___

```dataviewjs
const TIME_ENTRY_TAG = "#time-entry";
const NONE_TAG = "#none";

function zettelToDate(page) {
	const zettelDateFormat = "YYYY-MM-DD ddd HH\\h mm\\m ss\\s";
	return moment(page.file.name, zettelDateFormat).toDate();
}

// Add day to time entry array mappings for all time entries in the current pay period.
let dayToTimeEntryArray = new Map();
const pages = dv.pages();
for (const [_, page] of Object.entries(pages.values)) 
{
	// Skip if not a time entry.
	if (!page.file.tags.includes(TIME_ENTRY_TAG))
	{
		continue;
	}

	const date = zettelToDate(page);

	// Skip if older than 2 weeks.
	if (new Date() - date > 1.21e9)
	{
		continue;
	}

	const day = date.toDateString();

	// Add mapping for the page creation day if it doesn't exist.
	if (!dayToTimeEntryArray.has(day)) {
		dayToTimeEntryArray.set(day, []);
	}

	// Add page to pageArray for that day.
	const timeEntryArray = dayToTimeEntryArray.get(day);
	timeEntryArray.push(page);
	dayToTimeEntryArray.set(day, timeEntryArray);
}

// TODO
let dayAndProgramToHours = new Map();
for (const [day, timeEntryArray] of dayToTimeEntryArray) 
{	
	timeEntryArray.sort( (te1, te2) => zettelToDate(te1) - zettelToDate(te2) );
	console.log(timeEntryArray);

	// Add hours for each program in the day.
	const nTimeEntries = timeEntryArray.length;
	for (let i = 1; i < nTimeEntries; i++) {

		// There should only be one program tagged per time entry.
		const program = 
			timeEntryArray[i-1].file.tags
				.filter(t => t != TIME_ENTRY_TAG)
				.first(); 

		// Only display program hours.
		if (program == NONE_TAG) {
			continue;
		}

		const dayAndProgram = [day, program];

		// Add mapping for the day and program if it doesn't exist.
		if (!dayAndProgramToHours.has(dayAndProgram)) {
			dayAndProgramToHours.set(dayAndProgram, 0);
		}

		// Add hours for that day and program.
		const milliseconds = zettelToDate(timeEntryArray[i]) - zettelToDate(timeEntryArray[i-1]);
		let hours = dayAndProgramToHours.get(dayAndProgram);
		hours += milliseconds / 1000 / 60 / 60;
		dayAndProgramToHours.set(dayAndProgram, hours);
	}

	if (nTimeEntries > 0) {

		const lastProgram = 
			timeEntryArray[nTimeEntries-1].file.tags
				.filter(t => t != TIME_ENTRY_TAG)
				.first(); 

		// If user forgot to enter an end time, notify them.
		if (lastProgram != "#none") {
			dayAndProgramToHours.set([day, lastProgram + " missing end time"], 0);
		}
	}
}

// Flatten map into an array.
let tableEntries = [];
for (const [dayAndProgram, hours] of dayAndProgramToHours) {
	const day = dayAndProgram[0];
	const program = dayAndProgram[1];
	const tableEntry = [day, hours.toFixed(1), program];
	tableEntries.push(tableEntry);
}

// Display table.
dv.table(
	["Day", "Hours", "Program"],
	tableEntries
);
```