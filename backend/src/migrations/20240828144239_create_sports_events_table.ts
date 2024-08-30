import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('sports_events', (table) => {
    table.increments('event_id').primary();
    table.string('event_name').notNullable();
    table.decimal('odds', 5, 2).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('sports_events');
}
