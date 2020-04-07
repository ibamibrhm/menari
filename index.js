#!/usr/bin/env node

const { spawn } = require('child_process');
const ls = spawn('bash', [ '-c', 'curl -s -L https://raw.githubusercontent.com/ibamibrhm/menari/master/roll.sh | bash' ]);

ls.stdout.setEncoding('utf8');

ls.stdout.on('data', (data) => {
  console.log(data.replace(/.*m/, ''))
});

ls.stderr.on('data', (data) => {
  console.log(data.toString());
});

ls.on('close', (code) => {
  console.log(`exit with code ${code}`);
});