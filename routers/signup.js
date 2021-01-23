const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.post('/signUp', (req, res) => {
        knex('users').insert(req.body)
        .then((data) => {
            knex('cities')
            .select('*').from('cities').where('cities.city_id', req.body.cityId)
            .then((result) => {
                res.send({
                    'id': data[0],
                    'name': req.body.name,
                    'eMail': req.body.eMail,
                    'age': req.body.age,
                    'city': result[0]
                })
            })
            .catch((err) => {
                res.send(err)
            })
        })
        .catch((err) => {
            res.send(err)
        })
    })
}