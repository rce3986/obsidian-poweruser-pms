weblinks 
___

```dataviewjs
// TODO add comment
const TIME_ENTRY_TAG = "#time-entry";
const NONE_TAG = "#none";
const TEMPLATES_FOLDER = "obsidian-power-user-pms/templates";
const ZETTEL_DATE_FORMAT = "YYYY-MM-DD ddd HH\\h mm\\m ss\\s"

function zettelToDate(page)
{
	return moment(page.file.name, ZETTEL_DATE_FORMAT).toDate();
}

// Add day to time entry array mappings for all time entries in the current pay period.
let dayToTimeEntryArray = new Map();
const pages = dv.pages();
for (const [_, page] of Object.entries(pages.values)) 
{
	let date;

	// Skip current page if ...
	if (   page.file.folder == TEMPLATES_FOLDER                  // template page
		|| !page.file.tags.includes(TIME_ENTRY_TAG)              // not a time entry
		|| (new Date() - (date = zettelToDate(page)) > 1.21e9) ) // older than 2 weeks 
	{ 
		continue; 
	}

	const day = date.toDateString();

	// Add mapping for the page creation day if it doesn't exist.
	if (!dayToTimeEntryArray.has(day))
	{
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

	// Add hours for each program in the day.
	const nTimeEntries = timeEntryArray.length;
	for (let i = 1; i < nTimeEntries; i++)
	{
		// There should only be one program tagged per time entry.
		const program = 
			timeEntryArray[i-1].file.tags
				.filter(t => t != TIME_ENTRY_TAG)
				.first(); 

		// Only display program hours.
		if (program == NONE_TAG)
		{
			continue;
		}

		const dayAndProgram = [day, program];

		// Add mapping for the day and program if it doesn't exist.
		if (!dayAndProgramToHours.has(dayAndProgram))
		{
			dayAndProgramToHours.set(dayAndProgram, 0);
		}

		// Add hours for that day and program.
		const milliseconds = zettelToDate(timeEntryArray[i]) - zettelToDate(timeEntryArray[i-1]);
		let hours = dayAndProgramToHours.get(dayAndProgram);
		hours += milliseconds / 1000 / 60 / 60;
		dayAndProgramToHours.set(dayAndProgram, hours);
	}

	if (nTimeEntries > 0)
	{
		const lastProgram = 
			timeEntryArray[nTimeEntries-1].file.tags
				.filter(t => t != TIME_ENTRY_TAG)
				.first(); 

		// If user forgot to enter an end time, notify them.
		if (lastProgram != "#none")
		{
			dayAndProgramToHours.set([day, lastProgram + " missing end time"], 0);
		}
	}
}

// Flatten map into an array.
let tableEntries = [];
for (const [dayAndProgram, hours] of dayAndProgramToHours)
{
	const day = dayAndProgram[0];
	const program = dayAndProgram[1];
	const tableEntry = [day, hours.toFixed(1), program];
	tableEntries.push(tableEntry);
}

// Display table.
dv.table
(
	["Day", "Hours", "Program"],
	tableEntries
);
```