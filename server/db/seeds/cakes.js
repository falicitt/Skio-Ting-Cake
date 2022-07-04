/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cakes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cakes').insert([
        {
          id: 1,
          name: 'Durian Cake',
          image: '../',
          size: 6,
          price: 68,
          category_id: 1,
          featured: true,
        },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' },
      ])
    })
}
