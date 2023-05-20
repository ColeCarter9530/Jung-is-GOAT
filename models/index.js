const User = require('./user');
const Stroke = require('./stroke'); 

User.hasMany(Stroke, {
    foreignKey: "user_id"
});
Stroke.belongsTo(User, {
    foreignkey: "user_id"
});

module.exports = {User, Stroke};