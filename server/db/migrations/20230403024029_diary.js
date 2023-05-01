/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('diary', (table) => {
    table.increments('id').primary()
    table.string('date')
    table.string('emotion')
    table.string('roadblocks')
    table.string('successes')
    table.string('tomorrow_plan')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('diary')
}
