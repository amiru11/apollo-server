export default (sequelize, DataTypes) => {
  return sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
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
