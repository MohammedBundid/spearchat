const userService = require('../services/userService')


const getAllUsers = (req, res) => {
    const all_users = userService.getAllUsers
    res.render('pages/index.ejs', {name: 'john'})

}

module.exports = {
    getAllUsers
}