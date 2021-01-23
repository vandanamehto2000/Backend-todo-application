const { Router } = require('express')
const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.post('/cities', (req, res) => {
        knex('cities').insert(req.body)
        .then((data) => {
            knex.select('*').from('cities').where('city_name', req.body.city_name)
            .then((result) => {
                res.send({
                    city_id: result[0].city_id,
                    city_name: req.body.city_name
                })
            })
        })
        .catch((err) => {
            res.send(err)
        })
    })
}