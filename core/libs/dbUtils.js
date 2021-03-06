import db from './db'
import system from './system'
const debug = require('debug')('BorealDirector:src/libs/dbUtils')

const dbLoad = () => {
  debug('Loading DB')
  db.get('state') === undefined ? dbCreate() : system.emit('db', 'loaded')
}

const defaultDevice = { definition: 'BorealDirector-Internal', name: 'Internal' }

const dbCreate = () => {
  debug('No DB, Creating DB')
  db.put('devices.1000000000000000000000', defaultDevice)
  db.put('state', 1)
  system.emit('db', 'created')
}

export default dbLoad
export { dbLoad, dbCreate }
