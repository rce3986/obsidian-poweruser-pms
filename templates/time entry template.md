<%_*
// The title should be the date and time you started charging a specific program. It can be edited to retroactively enter time. 
_%>

This #time-entry follows the [[time entry template]] and can be viewed in the [[timesheet]].

Enter the program being charged after the / #program/<% tp.file.cursor(1) %>
<%_*
// Remember to create a zettel with the same name as the program as well so that it can be linked to from the time entry.
%>

```dataviewjs
await customJS.TimeEntry.hoursChargedMsg(dv);
```
___
<% tp.file.cursor(2) %>