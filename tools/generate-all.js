#!/usr/bin/env bash

node generate-component.js $1
node generate-controller.js $1
node generate-detail.js $1
