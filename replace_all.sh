#!/bin/sh 

# Replaces every instance of the first arg with the second arg in all files in the directory in which the command is executed." 

# Find files, execute grep -o on each, and pipe all matches directly to wc -l
count=$(find . -type f -name "*.md" -print0 -exec grep -o $1 {} + 2>/dev/null | wc -l)

find . -type f -name "*.md" -print0 | xargs -0 -r sed -i "s/$1/$2/g" 

echo "All $count occurrences of $1 were replaced with $2"

