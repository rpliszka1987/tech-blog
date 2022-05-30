const { Model, DataTypes } = require('sequalize');
const sequalize = require('../config/connection');
const bcrypt = require('bcrypt');

class Post extends Model {}


module.exports = Post;