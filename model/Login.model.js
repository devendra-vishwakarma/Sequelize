// const { DataTypes } = require('sequelize');
// const sequelize = require('./sequelize');
// import DataTypes from "sequelize";
// import { sequelize } from "../db/dbConfig.js";

// const User = sequelize.define('Loginuse', {
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });

// export default User;

import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dbConfig.js'; // Adjust the import path accordingly

const User = sequelize.define('Loginuser', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Synchronize the model with the database
(async () => {
    try {
        await User.sync(); // This will drop the table if it already exists
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating User table:', error);
    }
})();

export default User;

