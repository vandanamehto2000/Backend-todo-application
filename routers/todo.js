const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.post('/todo', (req, res) => {
        knex('todo').insert(req.body)
        .then((data) => {
            knex('todo')
            .join('users', 'todo.assignedTo', 'users.id')
            .join('cities', 'users.cityId', 'cities.city_id')
            .where('todo.id', req.body.assignedTo)
            .then((result) => {
                res.send({
                    'todo': {
                        'text': req.body.text,
                        'assignedTo': {
                            'id': result[0].id,
                            'name': result[0].name,
                            'eMail': result[0].eMail,
                            'city': {
                                'city_id': result[0].city_id,
                                'city_name': result[0].city_name
                            }
                        },
                        'dueDate': req.body.dueDate
                    }
                })
            })
        })
    })
}