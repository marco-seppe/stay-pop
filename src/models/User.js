module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        created_at: { 
            type: dataTypes.DATE,
            allowNull: false,
        }
    }, {tableName: 'users', underscored: true, timestamps: false })

    return User
}
  
