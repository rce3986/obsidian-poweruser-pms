// Grab all backlinks that aren't already included in the body.
let backlinks = dv.array(dv.current().file.inlinks)
    .filter(inlink => !dv.current().file.outlinks
        .some(outlink => outlink.path === inlink.path) );

// Output in a single line separated by a dash.
dv.span("backlinks " + backlinks.join(" - "));
