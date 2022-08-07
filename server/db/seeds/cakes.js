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
          price: 68.0,
          description:
            'Our specialty Durian cake has three layers of delicate vanilla sponge, and freshly baked durian folded through the fresh cream. Coated in a crumble of vanilla sponge and topped with fresh cream swirls and hand crafted premium French chocolate.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: true,
        },
        {
          id: 2,
          name: 'Mango Cake',
          image: '/mango3.jpg',
          size: 6,
          price: 68.0,
          description:
            'Our specialty Durian cake has three layers of delicate vanilla sponge, and freshly baked durian folded through the fresh cream. Coated in a crumble of vanilla sponge and topped with fresh cream swirls and hand crafted premium French chocolate.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: false,
        },

        {
          id: 3,
          name: 'Strawberry Cake',
          image: '/small_strawberry.jpg',
          size: 6,
          price: 68.0,
          description:
            'The perfect summer treat with three layers of strawberry cream filling separated by a light and fluffy vanilla sponge, this cake is topped with fresh cream swirls and dotted with sugar glazed strawberries and white chocolate wings.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: true,
        },
        {
          id: 4,
          name: 'Taro Cake',
          image: '/small_purple.jpg',
          size: 6,
          price: 68.0,
          description:
            'Our specialty Durian cake has three layers of delicate vanilla sponge, and freshly baked durian folded through the fresh cream. Coated in a crumble of vanilla sponge and topped with fresh cream swirls and hand crafted premium French chocolate.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: true,
        },
        {
          id: 5,
          name: 'Mango Mousse',
          image: '/small_mangomoose.jpg',
          size: 6,
          price: 68.0,
          description:
            'A layer of passionfruit jelly and dacquoise surrounded by 2 layers of mango mousse sitting on top of a light vanilla sponge base. Finished with a glossy mango glaze and decorated with hand picked raspberries, boysenberries, and fresh cream.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: true,
        },
        {
          id: 6,
          name: 'Macha Cake',
          image: '/small_macha_and_redbean.jpg',
          size: 6,
          price: 68.0,
          description:
            'Three layers of delicate green tea sponge and fresh cream, with fresh seasonal fruit in the centre. Topped with a pistachio crumble, hand crafted chocolates and Green Tea Macarons with a chocolate filling.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: false,
        },
        {
          id: 7,
          name: 'Vanilla Cake',
          image: '/vanilla.jpg',
          size: 6,
          price: 68.0,
          description:
            'One of our best selling cakes is made up of three layers of delicate vanilla sponge and fresh cream. Coated in our 100% Fresh Cream, this cake is fluffy and light and delicious in every mouthful.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: false,
        },
        {
          id: 8,
          name: 'Chocolate Cake',
          image: '/small_chocolate.jpg',
          size: 6,
          price: 68.0,
          description:
            'Our decadent chocolate sponge layered with a rich chocolate ganache and covered with ganache icing and surrounded by thin chocolate pieces. Topped with chocolate shavings and dusted with icing sugar.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: true,
        },

        {
          id: 9,
          name: 'Cheese & Sea Salt Cream Cake',
          image: '/seasalt.jpg',
          size: 6,
          price: 68.0,
          description:
            'Our specialty Durian cake has three layers of delicate vanilla sponge, and freshly baked durian folded through the fresh cream. Coated in a crumble of vanilla sponge and topped with fresh cream swirls and hand crafted premium French chocolate.',
          caution:
            'Contains: Egg, gluten (wheat), milk & soy. Processed in the same facility as products containing peanuts, sesame and tree nuts.',
          category_id: 1,
          featured: true,
        },
      ])
    })
}
