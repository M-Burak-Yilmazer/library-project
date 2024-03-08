const { Sequelize, DataTypes } = require("sequelize");
// sequelize instance oluştur:
const sequelize = new Sequelize("sqlite:./dataBase.sqlite3");

const Library = sequelize.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  ISBN: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  publicationYear: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: false,
  },
});
// sequelize.sync({ alter: true });
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("* DB Not Connected *"));

module.exports = Library;
