import { Event } from "../models/event";
import { IEventRepository } from "../interfaces/IEventRepository";

class EventService {
  private eventRepository: IEventRepository;

  constructor(eventRepository: IEventRepository) {
    this.eventRepository = eventRepository;
  }

  async getAllEvents(): Promise<Event[]> {
    return this.eventRepository.getAllEvents();
  }
}

export default EventService;
