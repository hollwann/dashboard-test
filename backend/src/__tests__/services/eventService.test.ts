import { IEventRepository } from "../../interfaces/IEventRepository";
import EventService from "../../services/eventService";

describe("EventService", () => {
  let eventService: EventService;
  let mockEventRepository: jest.Mocked<IEventRepository>;

  beforeEach(() => {
    mockEventRepository = {
      getAllEvents: jest.fn(),
    } as jest.Mocked<IEventRepository>;

    eventService = new EventService(mockEventRepository);
  });

  it("should fetch all events", async () => {
    const mockEvents = [
      { event_id: 1, event_name: "Soccer: Team A vs. Team B", odds: 1.75 },
      { event_id: 2, event_name: "Basketball: Team C vs. Team D", odds: 2.1 },
    ];

    mockEventRepository.getAllEvents.mockResolvedValue(mockEvents);

    const events = await eventService.getAllEvents();
    expect(events).toEqual(mockEvents);
    expect(mockEventRepository.getAllEvents).toHaveBeenCalledTimes(1);
  });
});
