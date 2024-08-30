import { Request, Response } from "express";
import EventService from "../services/eventService";
import EventRepository from "../repositories/eventRepository";

class EventController {
  private eventService: EventService;

  constructor() {
    const eventRepository = new EventRepository();
    this.eventService = new EventService(eventRepository);
  }

  public getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
      const events = await this.eventService.getAllEvents();
      res.json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

export default EventController;
