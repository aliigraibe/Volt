module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Product", {
      name: { type: DataTypes.STRING , allowNull:false},
      url: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER , defaultValue:9 ,validates:{min:6}},
      description: { type: DataTypes.STRING },
    });
  };