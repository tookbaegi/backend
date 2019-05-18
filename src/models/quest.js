const quest = (sequelize, DataTypes) =>
  sequelize.define('quest', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    isProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    place: { type: DataTypes.STRING, allowNull: false },
    person: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    endAt: { type: DataTypes.DATE },
    isPrivate: { type: DataTypes.BOOLEAN },
    like: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false }
  });

export default quest;
