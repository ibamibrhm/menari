#!/usr/bin/env node

const { spawn } = require('child_process');
const ls = spawn('bash', ['-c', 'curl -s -L https://raw.githubusercontent.com/ibamibrhm/menari/master/roll.sh | bash'], {
  stdio: 'inherit'
});