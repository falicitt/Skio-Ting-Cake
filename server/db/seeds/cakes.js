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
          image: '/small_durian.jpg',
          size: 6,
          price: 68,
          category_id: 1,
          featured: 'true',
        },
        {
          id: 2,
          name: 'Chocolate Cake',
          image: '/small_chocolate.jpg',
          size: 6,
          price: 68,
          category_id: 1,
          featured: 'true',
        },
        {
          id: 3,
          name: 'strawberry Cake',
          image: '/small_strawberry.jpg',
          size: 6,
          price: 68,
          category_id: 1,
          featured: 'false',
        },
      ])
    })
}
