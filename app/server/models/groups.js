const Sequelize = require('sequelize');
const connection = require('./connection');


const newGroup = connection.define('Group', {
    Name : {type: Sequelize.STRING, allowNull: false},
    Icon: {type: Sequelize.STRING, allowNull: false}
});

newGroup.sync({force: false});

module.exports = newGroup;