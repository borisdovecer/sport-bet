import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "../../config/database";
import { IUser } from "./userInterface";

const User: ModelStatic<Model<IUser>> = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
});

export default User;
