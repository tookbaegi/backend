const quest = (sequelize, DataTypes) =>
  sequelize.define('quest', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });

export default quest;
