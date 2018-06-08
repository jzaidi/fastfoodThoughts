
exports.up = (knex, Promise) => {
    return knex.schema.createTable('posts', (table) => {
        table.increments();
        table.string('title');
        table.string('author');
        table.string('description')
        table.timestamps(true, true);
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('posts');
};
