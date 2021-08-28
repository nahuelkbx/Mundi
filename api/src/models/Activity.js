const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
      },
      dificulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      },
      duration: {
        type: DataTypes.STRING,
        validate: {
          min: 0,
          max: 120,
        },
      },
      season: {
        type: DataTypes.ENUM("verano", "otoño", "invierno", "primavera"),
      },
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: false,
    }
  );
};
