const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const bcryt = require('bcrypt');

class User extends Model {
    // set up method to run on data and check pw
    checkPassword(LoginPw) {
        return bcryt.compareSync(LoginPw, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
},
{
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcryt.hash(newUserData.password, 10);
            return newUserData;
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcryt.hash(updatedUserData.password, 10); 
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;