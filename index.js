const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("task_management", "root", "leconghuu", {
  host: "localhost",
  dialect: "mysql",
});

//tao model
const Task = sequelize.define("Task", {
  name: {
    type: DataTypes.STRING, //VARCHAR(255)
    allowNull: false, //NOT NULL
  },
  status: {
    type: DataTypes.STRING,
  },
});

//Dong bo model voi database
const syncModel = async () => {
  await Task.sync({ force: true }); // force: true => xoa bang cu va tao bang moi
  //Task.sync({ alter: true }); // alter: true => thay doi bang
  console.log("Sync success");
};
syncModel();

//Kiem tra ket noi
const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect success");
  } catch (err) {
    console.log("Connect fail");
    console.log(err);
  }
};
checkConnect();
