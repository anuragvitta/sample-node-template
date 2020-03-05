var connection = require('../db/connect');
const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from user', (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    })

}
module.exports = getUsers;