
exports.up = function(knex) {
    return knex.schema.createTable('cards', function(table){
        table.string('id').primary();
        table.string('hash').notNullable();
        table.string('cpf', 11).notNullable();
        table.integer('value').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cards');
};