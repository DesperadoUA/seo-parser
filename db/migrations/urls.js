/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('urls', function(table){
        table.increments()
        table.string('url').notNullable()
        table.integer('domain_id')
             .unsigned()
             .references('id')
             .inTable('domains')
             .onDelete('CASCADE')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.shemas.dropTable('urls')
}