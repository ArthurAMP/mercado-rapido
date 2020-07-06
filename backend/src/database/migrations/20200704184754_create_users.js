
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.integer('telefone').notNullable();
        table.integer('saldo').default(0);
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
