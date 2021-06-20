module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Event",
    {
      organizer: { type: DataTypes.STRING, validate: { len: [0, 20] } },
      name: { type: DataTypes.STRING, validate: { notContains: "event" } },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        allowNull: false,
      },
      image: { type: DataTypes.STRING, allowNull: false },
      numberOfSeats: { type: DataTypes.INTEGER, min: 0 },
      bookedSeats: {
        type: DataTypes.INTEGER,
        validate: {
          bookedSeats(value) {
            if (value >= this.numberOfSeats) {
              return { massage: error.massage };
            }
          },
        },
      },
      startDate: {
        type: DataTypes.DATE,

        validate: {
          start(value) {
            if (this.endDate && !value) {
              throw new Error("error1");
            }
            if (value < new Date()) {
              throw new Error("error2");
            }
          },
        },
      },
      endDate: {
        type: DataTypes.DATE,
        validate: {
          end(value) {
            if (this.startDate && !value) {
              throw new Error("error3");
            }
          },
        },
      },
    },

    // { createdAt: false, updatedAt: false }
  );
};
