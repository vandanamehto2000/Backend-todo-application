const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.post('/login', (req, res) => {
        knex.select('*').from('users').where('eMail', req.body.eMail)
        .then((data) => {
            if(data.length != 0){
                if(data[0].password == req.body.password){
                    res.cookie('eMail', req.body.eMail)
                    // res.send(req.body.eMail)
                }else{
                    console.log('authontication failed')
                    res.send('authontication failed')
                }
            }
            else{
                console.log('Authontication failed! please register yourself')
                res.send('Authontication failed! please register yourself')
            }
        })
    })
}

// module.exports = (Router) => {
//     Router.post('/login', (req, res) => {
//         console.log(req.body)
//         knex.select('*').from('users')
//         .where('eMail', req.body.eMail)
//         .then((response) => {
//             if(response.length > 0){
//                 if(response[0].password == req.body.password){
//                     res.cookie('eMail', req.body.eMail)
//                     res.send(req.body.eMail)
//                 }else{
//                     res.send('authontication failed')
//                 }
//             }else{
//                 res.send('Authontication failed! please register yourself')
//             }
//         })
//     })
// }