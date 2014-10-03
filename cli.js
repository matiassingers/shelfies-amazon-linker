#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var shelfiesAmazonLinker = require('./');
var argv = process.argv.slice(2);

var copypaste = require('copy-paste').silent();
var chalk = require('chalk');

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    shelfies-amazon-linker why nations fail',
    '',
    '    Looking up: "why nations fail"',
    '    Authors: [ \'Daron Acemoglu\', \'James Robinson\' ]',
    '    [Why Nations Fail](http://www.amazon.com/Why-Nations-Fail-Origins-Prosperity/dp/0307719227) - *The Origins of Power, Prosperity, and Poverty*',
    '',
    '    Copied to your clipboard',
    ''
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

console.log('Looking up: "' + argv.join(' ') + '"');

shelfiesAmazonLinker(argv.join(' '), function(err, result){
  if(err){
    return console.log(chalk.red('\nAn error occured, please try again.'));
  }

  console.log('Authors:', result.authors);

  console.log(chalk.inverse(result.markdown));

  copypaste.copy(result.markdown);
  console.log(chalk.green('\nCopied to your clipboard'));
});
