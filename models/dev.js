const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dev extends Model {
    static associate(models) {
      // Dev.hasMany(models.Carts, {
      //   foreignKey: 'dev_id',
      // });
    }
  };

  Dev.init({
    dev_id: { type: DataTypes.INTEGER, defaultValue: '', allowNull: false, unique: true },
    name: { type: DataTypes.STRING, defaultValue: '', allowNull: false, unique: true },
    number: { type: DataTypes.STRING, defaultValue: '', allowNull: true, unique: true },
    recommended: { type: DataTypes.BOOLEAN, defaultValue: '', allowNull: true, unique: false },
    experience: { type: DataTypes.INTEGER, defaultValue: '', allowNull: true, unique: false },
    skills: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [''], allowNull: true, unique: false },
    email: { type: DataTypes.STRING, defaultValue: '', allowNull: true, unique: true },
    location: { type: DataTypes.STRING, defaultValue: '', allowNull: true, unique: false },
    picture: { type: DataTypes.STRING, defaultValue: 'https://res.cloudinary.com/ryanbuckleyca/image/upload/c_scale,h_150,w_150/v1600109993/user_bgu0at.jpg', allowNull: true, unique: false },
  }, {
    sequelize,
    modelName: 'Dev',
  });

  return Dev;
};
