module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
        email: {
            unique: true,
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.JSON
        },
        post:{
            type: DataTypes.STRING
        },
        info:{
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        }
    });

    return users;
};