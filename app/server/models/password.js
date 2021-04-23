const Sequelize = require('sequelize');
const connection = require('./connection');

const newPassword = connection.define('Password', {
    Group : {type: Sequelize.STRING, allowNull: false},
    Image : {type: Sequelize.STRING, allowNull: true},
    Name: {type: Sequelize.STRING, allowNull: false},
    Login: {type: Sequelize.STRING, allowNull: false},
    Password: {type: Sequelize.STRING, allowNull: false}
});

newPassword.sync({force: false});

module.exports = newPassword;