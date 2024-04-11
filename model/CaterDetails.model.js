import { DataTypes } from "sequelize";
import { sequelize } from "../db/dbConfig.js"; // Assuming you've defined sequelize instance correctly

const CaterDetails = sequelize.define("CaterDetails", {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    servicecharge: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    contactno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await CaterDetails.sync(); // This will drop the table if it already exists
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating User table:', error);
    }
})();

export default CaterDetails;
