import AirBnbEvent from "../models/AirBnbEvent";
import { EventRepository } from "../repositories/eventRepository";

export default interface EventUseCase {
  getAllEvent(): Promise<AirBnbEvent[]>;
}

class RealEventUseCase implements EventUseCase {
  eventRepo: EventRepository;
  constructor(eventRepo: EventRepository) {
    this.eventRepo = eventRepo;
  }

  async getAllEvent(): Promise<AirBnbEvent[]> {
    return await this.eventRepo.getAllEvent();
  }
}

export const NewEventUseCase: (eventRepo: EventRepository) => EventUseCase = (
  eventRepo
) => new RealEventUseCase(eventRepo);
