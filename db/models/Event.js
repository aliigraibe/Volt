module.exports = (sequelize, DataTypes) => {
    return sequelize.define("event", {
      organizer: {type:DataTypes.STRING , validate:{len:[0,20]} },
      name: { type: DataTypes.STRING ,notContains: 'event'},
      email: { type: DataTypes.STRING , isEmail: true , allowNull:false},
      image: { type: DataTypes.STRING , allowNull:false },
     numberOfSeats: { type: DataTypes.INTEGER , min: 0},
     bookedSeats: { type: DataTypes.INTEGER  },
    startDate:{type: DataTypes.DATE,isAfter: "2021-06-21",allowNull:false },
    endDate : {type: DataTypes.DATE,allowNull:false }
    });
  };