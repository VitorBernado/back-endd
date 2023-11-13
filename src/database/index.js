import { Sequelize } from "sequelize";

import config from "../config/database";

import User from "../app/models/User";
import Score from "../app/models/Score";

const models = [User, Score];

class Database {
    constructor() {
        this.connection = new Sequelize(config);
    }

    init() {
        models.forEach(model => model.init(this.connection));
        this.init();
        this.associate();
    }

    associate() {
        models.forEach(model => {
            if (model.associate)
            model.associate(this.connection.models)
        });
    };
}

export default Database;