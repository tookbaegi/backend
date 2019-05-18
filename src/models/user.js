const user = (sequelize, DataTypes) =>
  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    facebookId: {
      type: DataTypes.STRING
    },
    kakaoId: {
      type: DataTypes.STRING
    },
    googleId: {
      type: DataTypes.STRING
    }
  });

export default user;
