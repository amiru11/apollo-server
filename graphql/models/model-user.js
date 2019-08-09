export default (sequelize, DataTypes) => {
  return sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING(128)
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    },
    {
      indexes: [
        {
          fields: ['deleted']
        }
      ]
    }
  )
}
