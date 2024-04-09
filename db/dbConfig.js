import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize('Login', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


