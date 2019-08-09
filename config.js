const config = {
  project: 'apollo-server',
  version: '0.1',
  port: 4000,
  db: {
    host: 'your host',
    database: 'your_database',
    username: 'your_db_name',
    password: 'your_db_password',
    dialect: 'mysql',
    timezone: '+09:00',
    forceSync: false,
    alter: false
  }
}

export default config
