/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, name: 'Cream Cake' },
        { id: 2, name: 'Fondant Cake' },
      ])
    })
}
