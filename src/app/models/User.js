import Sequelize, { Model }  from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            filePath: Sequelize.STRING,
        },
        {
            sequelize,
        })
    }

    static associate(models) {
        this.hasMany(models.Score);
    }
}

export default User;