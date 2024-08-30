import { Knex } from "knex";
import knex from "../database/database";
import { Event } from "../models/event";
import { IEventRepository } from "../interfaces/IEventRepository";

class EventRepository implements IEventRepository {
  private db: Knex;

  constructor() {
    this.db = knex;
  }

  async getAllEvents(): Promise<Event[]> {
    return this.db<Event>("sports_events").select("*");
  }
}

export default EventRepository;
