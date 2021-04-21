module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define("products", {
        title: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        code: {
            unique:true,
            type: DataTypes.STRING
        },
        total:{
            type: DataTypes.INTEGER()
        },
        price:{
            type: DataTypes.INTEGER()
        }

    });

    return products;
};


