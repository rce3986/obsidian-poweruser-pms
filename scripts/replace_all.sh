#!/bin/sh 

find . -name '*.md' | xargs -r sed -i '' "s/$1/$2/g" 

