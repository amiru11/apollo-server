import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../../config'

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    host: config.db.host,
    timezone: config.db.timezone,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true
    }
  }
)

let db = {}
fs.readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf('.') !== 0 && file !== 'index.js'
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.User.hasMany(db.Post)

db.Post.belongsTo(db.User)

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
