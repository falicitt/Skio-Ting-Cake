#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Update package list and install dependencies on Ubuntu
    apt-get update
    apt-get install -y python3 python3-distutils
else
    echo "Unsupported OS: $OSTYPE"
    exit 1
fi

# Proceed with npm install
npm install