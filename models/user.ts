import {DataTypes} from 'sequelize';
import db from "../db/connection";

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
});

export default User;