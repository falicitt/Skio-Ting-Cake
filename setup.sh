#!/bin/bash

# Update package list
apt-get update

# Install Python and distutils
apt-get install -y python3 python3-distutils

# Proceed with npm install
npm install