import Sequelize, { Model }  from "sequelize";

class Score extends Model {
    static init(sequelize) {
        super.init({
            score: Sequelize.INTEGER,
            status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
        },
        {
            sequelize,
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: "User_id" });
    }
}

export default Score;