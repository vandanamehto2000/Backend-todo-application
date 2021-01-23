const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.get('/get/cities', (req, res) => {
        knex.select('*').from('cities')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    Router.get('/get/users', (req, res) => {
        knex.select('*').from('users')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}
