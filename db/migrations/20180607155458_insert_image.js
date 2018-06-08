exports.up = (knex, Promise) => {
  return knex.schema.table("posts", table => {
      table.string("images");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.table("posts", function(table) {
    table.dropColumn("images");
  });
};
