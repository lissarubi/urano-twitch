#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
const addCommand = require('./addCommand');
const createBot = require('./createBot')

if (argv.c || argv.create){
  createBot()
} 

if (argv.a || argv.add){
  addCommand()
}
