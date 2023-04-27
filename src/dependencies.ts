import { NewEventRepository } from "./repositories/eventRepository";
import EventUseCase, { NewEventUseCase } from "./usecases/eventUseCase";

const eventRepo = NewEventRepository();
const eventUseCase = NewEventUseCase(eventRepo);

interface Usecases {
  event: EventUseCase;
}

interface Dependencies {
  usecases: Usecases;
}

export const dependencies: Dependencies = {
  usecases: {
    event: eventUseCase,
  },
};
