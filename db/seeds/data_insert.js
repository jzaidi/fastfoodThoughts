
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
     {
       "title": "The time someone threw a Mcflurry at me",
       "author": "Jaffar Zaidi",
       "description": "On June 10th, 2013. This crazy lady came in and threw a huge mcflurry at the manager",
       "votes": 10,
       "downvotes": -1,
        "images": "http://freepngimg.com/download/mcdonalds/35975-4-mcdonalds-logo.png"
      },
     {
       "title": "Teenagers are Horrible",
       "author": "Mandy Moose",
       "description": "On June 11th, 2013. These kids left such a big mess",
       "votes": 13,
       "downvotes": -5,
       "images": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Burger_King_Logo.svg"
     },
     {
       "title": "Big Macs are rotten",
       "author": "Mandy Moose",
       "description": "On June 12th, 2013. I realized big macs are frozen pieces of meat basically eeehhhwwwweew",
       "votes": 8,
       "downvotes": -13,
       "images": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Burger_King_Logo.svg"
      } 
      ]);
    });
};
