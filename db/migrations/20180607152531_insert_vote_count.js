exports.up = (knex, Promise) => {
  return knex.schema.table("posts", table => {
    table.integer("votes");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.table("posts", function(table) {
      table.dropColumn("votes");
  });
};
