import system from './system'
import { definitions, functions } from './globals'
const debug = require('debug')('BorealDirector:core/libs/functionManager')

const loadFunctions = () => {
  debug('Loading Functions')
  definitions.forEach(definition => {
    functions.push({ definition: definition.name, functions: definition.functions })
  })
}

system.on('definitionsLoaded', (stream) => {
  loadFunctions()
})
