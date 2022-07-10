/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders_products', (table) => {
    table.integer('product_id').references('products.id')
    table.integer('order_id').references('orders.id')
    table.integer('quantity')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('orders_products')
};
