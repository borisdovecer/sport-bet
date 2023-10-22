import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "../../config/database";
import { IEvent } from "./eventInterface";

const Event: ModelStatic<Model<IEvent>> = sequelize.define("Event", {
  event_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  event_name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  odds: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Event;
