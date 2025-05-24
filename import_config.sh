#!/bin/bash

# Modifications to obsidian config are made in the app in the main vault.
# This script copies the vault config from the vault root directory into the cloned repo to get an updated config before adding to source control.

cp -a ../.obsidian .

