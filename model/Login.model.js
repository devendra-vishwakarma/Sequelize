// const { DataTypes } = require('sequelize');
// const sequelize = require('./sequelize');
import DataTypes from "sequelize";
import { sequelize } from "../db/dbConfig.js";

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

export default User;
