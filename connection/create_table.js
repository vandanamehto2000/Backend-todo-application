const knex = require('./knex_connection')

knex.schema.hasTable('cities').then((exists) => {
    if(!exists){
        return knex.schema.createTable('cities', (table) => {
            table.increments('city_id').primary();
            table.string('city_name', 100).unique();
        })
    }
})

knex.schema.hasTable('users').then((exists) => {
    if(!exists){
        return knex.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.string('name', 50);
            table.string('eMail', 100).unique();
            table.string('password', 100);
            table.integer('age', 50).defaultTo(0);
            table.integer('cityId', 50).unsigned().references('cities.city_id');
        })
    }
})

knex.schema.hasTable('todo').then((exists) => {
    if(!exists){
        return knex.schema.createTable('todo', (table) => {
            table.increments('id')
            table.string('text', 1000);
            table.integer('assignedTo', 100).unsigned().references('users.id')
            table.string('dueDate');
        })
    }
})