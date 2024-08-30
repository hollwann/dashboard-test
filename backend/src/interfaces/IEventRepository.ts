import { Event } from "../models/event";

export interface IEventRepository {
  getAllEvents(): Promise<Event[]>;
}
