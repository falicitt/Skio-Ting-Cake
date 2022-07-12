/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.date('created_at')
    table.string('status')
    table.string('add_by_user').references('users.auth0_id')
    table.integer('amount')
    table.integer('phone')
    table.date('pickup_date')
    table.time('pickup_time')
    table.string('shipping')
    table.string('payment')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('orders')
};
