const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');
const bcrypt = require('bcrypt');

class Comment extends Model {}


module.exports = Comment;