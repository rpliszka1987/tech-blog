const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}


module.exports = User;