import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    await knex('sports_events').del();

    await knex('sports_events').insert([
        { event_name: 'Soccer: Team A vs. Team B', odds: 1.75 },
        { event_name: 'Basketball: Team C vs. Team D', odds: 2.10 },
        { event_name: 'Tennis: Player E vs. Player F', odds: 1.55 },
        { event_name: 'Cricket: Team G vs. Team H', odds: 2.30 },
        { event_name: 'Hockey: Team I vs. Team J', odds: 1.85 }
    ]);
}
