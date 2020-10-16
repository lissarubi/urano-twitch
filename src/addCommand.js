const readlineSync = require('readline-sync')
const simpleCommand = require('./commandsScript/simpleCommand')
const banCommand = require('./commandsScript/ban')

function addCommand(){
  const options1 = ['Simple Command', 'Pre-Build Commands']

  const index = readlineSync.keyInSelect(options1, 'What type of command do you want?')

  if (index == 0){
    simpleCommand()
  }

  if (index == 1){
    const options2 = ['Timeout Command']
    const index2 = readlineSync.keyInSelect(options2, 'What Pre-Build command do you want?')

    if (index2 == 0){
      banCommand()
    }
  }
}

module.exports = addCommand
