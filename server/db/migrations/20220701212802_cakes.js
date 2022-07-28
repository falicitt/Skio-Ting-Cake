/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cakes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.integer('size')
    table.integer('price')
    table.integer('category_id').references('categories.id')
    table.boolean('featured')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('cakes')
}
